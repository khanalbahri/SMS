import UserModel from "../models/user.js";
// var bcrypt = require('bcryptjs');
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signIn = async (req,res) => {
    const {email,password} = req.body;

    try {
        console.log(email,password);
        const oldUser = await UserModel.findOne({email});
        if(!oldUser) return res.status(404).json({message:"User does'nt exist"});
        const isPasswordCorrect = await bcrypt.compare(password,oldUser.password);
        if(!isPasswordCorrect) return res.status(404).json({message: "Invalid Credentials!"});
        const token = jwt.sign({email:oldUser.email,id:oldUser._id},"khanAlbahri",{expiresIn: "1h"});
        res.status(200).json({result:oldUser,token});
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const signUp = async (req,res) => {
    const {userName,email,password,confirmPassword,userImage} = req.body;

    try {
        console.log(email,password,userName);
        const oldUser = await UserModel.findOne({email});
        if(oldUser) return res.status(404).json({message:"User Already Exist!"});
        if (password !== confirmPassword) return res.status(404).json({message: "Passwords do not match!"});
        const hashedPassword =  await bcrypt.hash(password,12);
        console.log(hashedPassword);
        const result = await UserModel.create({userName,email,password:hashedPassword,userImage});
        const token = jwt.sign({email:result.email,id:result._id},"khanAlbahri",{expiresIn:"1h"});
        res.status(200).json({result,token});
    } catch (error) {
        res.status(500).json(error);
    }


}