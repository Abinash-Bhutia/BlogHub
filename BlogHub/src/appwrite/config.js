import conf from "../conf/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    tablesDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.tablesDB = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    //----- Database services
    // create post or rows
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.tablesDB.createRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,             // there i am using 'slug' value as a rowID
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            console.log("Error message:", error.message);
            console.log("Error code:", error.code);
        }
    }

    // update post or rows
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.tablesDB.updateRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }


    // delete post or rows
    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    // get post or row
    async getPost(slug) {
        try {
            return await this.tablesDB.getRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            )

        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    // get all posts or rows (through the quries)
    async getPosts(queries = [Query.equal("status", "active")]) {                  // queries are only when use in index of appwrite
        try {
            return await this.tablesDB.listRows(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getAllPost :: error", error);
            return false
        }
    }


    ///----- file upload services into Storage ------------
    // file upload
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    // delete file
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    // getFilePreview() takes the Appwrite file ID and gives you a URL that the browser can use to show that file.

    // file preview
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    getFileView(fileId) {
    return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    )
}
}


const service = new Service()
export default service