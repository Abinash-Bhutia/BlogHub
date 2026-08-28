import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import apppwriteService from '../../appwrite/config'


function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {
        // check data is present or not, if data is present update the post or data or file.
        if (post) {
            const file = data.image[0] ? await apppwriteService.uploadFile(data.image[0]) : null

            if (file) {
                apppwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await apppwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,

            })

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }

        } else {      // there we create the post, if nothing is for update.
            const file = data.image[0] ? await apppwriteService.uploadFile(data.image[0]) : null

            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId

                console.log("Slug being submitted:", data.slug)
                const dbPost = await apppwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    // change the title into 'slug'
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value.trim()
                .toLowerCase()
                .replace(/[^a-zA-Z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
        return ''
    }, [])


    // useEffect() is used to watch changes in the form, especially the title, and automatically update the slug. when the Form was displayed. 
    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })
            }
        })

        return () => {                       // return is used to stop/unsubscribe the watcher when the 'component is removed or when form was not displayed'.
            subscription.unsubscribe()      // unsubscribe() is a method used to stop the form watcher/subscription.
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        {console.log("Featured Image ID:", post.featuredImage)}
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                            onError={(e) => {
                                console.log("Image failed:", e)
                                console.log("Image ID:", post.featuredImage)
                            }}
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm

// note: there we pass the 'control' obj from useForm() to access the 'Controller'
// title: post?.title || ""   =>  it means if already post was there then that title, otherwise empty because of no title or create a post

// register connects an input field to React Hook Form.
// "When the form is submitted, validate the form and then give me the form data."