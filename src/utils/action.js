"use server"
import User from "@/models/user";
import { connectToDB } from "./database";
import bcrypt from "bcryptjs";

export const register = async (formData) => {
  const { username, email, password, passwordRepeat } = Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    console.log("Passwords do not match");
  }
  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (user) {
      console.log("user already exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
