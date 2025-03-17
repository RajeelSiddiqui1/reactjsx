const conf = {

    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectURL: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseIdURL: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectioIdURL: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketIdURL: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf;