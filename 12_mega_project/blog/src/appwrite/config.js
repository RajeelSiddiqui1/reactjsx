import conf from '../conf/conf';
import { Client, Databases, Storage, Query } from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    // create post
    async createPost({title, slugs, content, featuredImage, status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectioId,
                slugs,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            )

        } catch (error) {
            console.log("Appwrite Service Error:: CreatePost :: ", error);
        }
    } 

    // update post
    async updatePost(slugs,{title, content, featuredImage, status}){
        try {
             return await this,this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectioId,
                slugs,
                {
                    title,
                    content,
                    featuredImage,
                    status
                } 
            )
        } catch (error) {
            console.log("Appwrite Service Error:: UpdatePost :: ", error);
        }
    }

    // delete post
    async deletePost(slugs){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectioId,
                slugs
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service Error:: DeletePost :: ", error);
        }
        return false;
    }

    // get post
    async getPost(slugs){
        try {
           return await this.databases.getDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectioId,
               slugs
           ) 
        } catch (error) {
           console.log("Appwrite Service Error:: GetPost :: ", error); 
           return false;
        }
    }

    // get active post 
    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectioId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service Error:: GetPosts :: ", error);
        }
    }

    // file upload 
     async uploadFile(file){
        try {
            return await this.bucket.createFile(
                confappwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite Service Error:: UploadFile :: ", error);
        }
     }

    // delete file 
    async DeleteFile(fileId){
        try {
           await this.bucket.deleteFile(
               conf.appwriteBucketId,
               fileId
           )
           return true; 
        } catch (error) {
           console.log("Appwrite Service Error:: DeleteFile :: ", error); 
        }
    } 

    // file preview 
    async filePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service Error:: FilePreview :: ", error);
        }
    }
}

const service = new Service();
export default service;