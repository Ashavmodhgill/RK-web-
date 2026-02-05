import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
        unique: true,
    },
    password: {
        type: string,
        required: true
    }
}, {timestamps: true});



const User = mongoose.model("User", userSchema);
export default User;




