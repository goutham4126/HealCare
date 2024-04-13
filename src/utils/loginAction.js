"use client"
import { signIn } from "next-auth/react";

export const login = async (formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
      await signIn("credentials", { username, password ,callbackUrl: '/' });
    } catch (err) {
      console.log(err);
      if (err.message.includes("CredentialsSignin")) {
        return { error: "Invalid username or password" };
      }
      throw err;
    }
  };