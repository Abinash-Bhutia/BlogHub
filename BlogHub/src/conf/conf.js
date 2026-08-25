// Environment variables are read as strings by default.
// there we converts all the 'env' variables into string 
// import.meta.env. => it is the syntax for access the 'env' variables

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteTableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY)
}

export default conf
