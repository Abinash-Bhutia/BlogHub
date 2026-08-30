import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {   
    console.log("PostCard featuredImage:", featuredImage)
    return (
        <Link to={`/post/${$id}`}>           

            <div className='w-full bg-gray-100 rounded-xl p-3'>
                <div className='w-full justify-center mb-3'>
                    <img src={appwriteService.getFileView(featuredImage)} alt={title} className='rounded-xl' />

                </div>
                <h2 className='text-lg font-bold text-[#43484e]'>
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard