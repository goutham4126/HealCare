import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });
    
        if (!user) throw new Error("Wrong credentials!");
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) throw new Error("Wrong credentials!");
        return user;

    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
         }),
         CredentialsProvider({
            async authorize(credentials) {
              try {
                const user = await login(credentials);
                return user;
              } catch (err) {
                return null;
              }
            },
          }),
    ],
    callbacks: {
        async session({ session }) {
            try {
                const sessionUser = await User.findOne({ email: session.user.email });
                if (sessionUser) {
                    session.user.id = sessionUser._id.toString();
                }
                return session;
            } catch (error) {
                console.error("Error fetching user session:", error);
                return session;
            }
        },

        async signIn({ account, profile, user }) {
            if (account.provider === "github"||account.provider === "google") {
            try {
                await connectToDB();
                // Check if the user already exists
                const userExists = await User.findOne({ email: profile.email });

                // If not, create a new user
                if (!userExists) {
                    // Create a new user with the provided credentials
                    const newUser=new User({
                        email: profile.email,
                        username: profile.name,
                        image: profile.avatar_url || profile.picture
                    });
                    await newUser.save()
                }

            } catch (error) {
                console.error("Error signing in:", error);
                return false;
            }
            }
            return true;
        }
    }
});

export {handler as GET ,handler as POST}
