import TeacherModel from  "../models/teacher.js";
import multer from "multer";
import fs from "fs";


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/teachers/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+ "-" +file.originalname.toLowerCase())
    }
})

const fileFilter = (req,file,cb)=> {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png"){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

export const getTeachers = async (req,res)=>{
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = limit*page;
    console.log(page,limit,skip);
    try {
        // const teachers = await TeacherModel.find({userId:req.userId});
        const teachers = await TeacherModel.aggregate([
            {$match: {userId: req.userId}},
            {$skip: skip},
            {$limit: limit},
        ])
        res.status(200).json(teachers);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const addTeacher = async (req,res) =>{
    const teacherData = req.body;
    const userId = req.userId;
    const newTeacher = new TeacherModel({...teacherData, userId, teacherImage: req.file.path});
    try {
        await newTeacher.save();
        res.status(200).json(newTeacher);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const deleteTeacher = async (req,res) => {
    const {id} = req.params;
    try {
        const teacher = await TeacherModel.findByIdAndRemove(id);
        fs.unlinkSync(teacher.teacherImage);
        // console.log("deleted");
        res.status(200).json({message: "Teacher Record is deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const updateTeacher = async (req,res) =>{
    const {id} = req.params;
    const userId = req.userId;
    const {userName,teacherName,qualification,role,phoneNumber,email,address,otherInfo,status,birthDate,arrivalDate,withdrawnDate,teacherImage} = req.body;
    const updatedTeacher = {userId,userName,teacherName,qualification,role,phoneNumber,email,address,otherInfo,status,birthDate,arrivalDate,withdrawnDate,teacherImage,_id:id};
    try {
        console.log("done");
        await TeacherModel.findByIdAndUpdate(id,updatedTeacher,{new:true});
        res.status(200).json(updatedTeacher);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export const searchTeacher = async (req,res)=> {
    const search = req.query.search;
    const searchBy = req.query.searchBy;
    try {
         const query = {[searchBy]:search,"userId":req.userId}
        //  console.log(query);
        let result = await TeacherModel.find(query);
        
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({"message":error});
    }

}

export const getTeacher = async (req,res) => {
    const id = req.params.teacherId;
    try {
        const teacher = await TeacherModel.find({"_id": id,userId: req.userId });
        if(!teacher) return res.status(404).json({"message":"No Results Found"});
        res.status(200).json(teacher);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }

}