import TeacherModel from  "../models/teacher.js";

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
    const newTeacher = new TeacherModel({...teacherData, userId});
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
        await TeacherModel.findByIdAndRemove(id);
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