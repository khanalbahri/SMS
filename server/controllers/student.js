import StudentModel from "../models/student.js";
import multer from "multer";
import fs from "fs";


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/students/')
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
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
})


export const getStudents = async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = limit*page;
    try {
        const students = await StudentModel.aggregate([
            {$match: {userId:req.userId}},
            {$skip: skip },
            {$limit: limit},
        ]);
        res.status(200).json(students);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

export const addStudent = async (req,res) =>{
    // console.log("add student requested", req.body);
    const studentData = req.body;
    const userId = req.userId;
    const newStudent = new StudentModel({...studentData, userId, studentImage: req.file.path});

    try {
        await newStudent.save();
        res.status(200).json(newStudent);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await StudentModel.findByIdAndRemove(id);
        fs.unlinkSync(student.studentImage);
        res.status(200).json({ message: "Student Record id deleted successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;
    const {userName, studentName, fatherName, birthDate, classAdmittedIn, classStudyingIn, phoneNumber, address, status, withdrawnDate, studentImage } = req.body;

    const updatedStudent = { userId,userName,studentName, fatherName, birthDate, classAdmittedIn, classStudyingIn, phoneNumber, address, status, withdrawnDate, studentImage, _id: id };
    try {
        await StudentModel.findByIdAndUpdate(id, updatedStudent, { new: true });
        res.status(200).json(updatedStudent);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}


export const searchStudent = async (req,res)=> {
    const search = req.query.search;
    const searchBy = req.query.searchBy;
    try {
         const query = {[searchBy]:search,"userId":req.userId}
        //  console.log(query);
        let result = await StudentModel.find(query);
        
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({"message":error});
    }

}

export const getStudent = async (req,res) => {
    const id = req.params.studentId;
    try {
        const student = await StudentModel.find({"_id": id,userId: req.userId });
        if(!student) return res.status(404).json({"message":"No Results Found"});
        res.status(200).json(student);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }

}






// testing code

// export const addStudent = async (req, res) => {
//     const studentData = req.body;
//     // console.log(studentData);
//     var newStudent;

//     var i = 0;
//     while (i < 50000) {
//         newStudent = new StudentModel(studentData);
//         await newStudent.save();
//         console.log(`done ${i}`);
//         i++;
//     }

//     try {
//         res.status(200).json(newStudent);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// }