import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';


export class AuthService{
    clinet = new Client();
    account;

    constructor(){
        this.clinet
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectURL);
            this.account = new Account(this.clinet);
    }

    // create account
    async createAccount({email, password, name}){
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (condition) {
                this.login({email, password});
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    // login
    async login({email, password}){
        try {
            this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    // check user
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    // logout
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;