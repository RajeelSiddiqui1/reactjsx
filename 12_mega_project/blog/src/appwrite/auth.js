import conf from '../conf/conf';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        console.log("Appwrite URL:", conf.appwriteURL);
        console.log("Project ID:", conf.appwriteProjectID);

        if (!conf.appwriteURL || !conf.appwriteProjectID) {
            throw new Error("Appwrite URL or Project ID is missing!");
        }

        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            return userAccount;
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log("Session created:", session);
            return session;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("Current user:", user);
            return user;
        } catch (error) {
            console.error("Get user error:", error);
            throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            console.log("Logged out successfully");
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;