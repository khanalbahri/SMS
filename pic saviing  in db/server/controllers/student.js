import StudentModel from "../models/student.js";

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
    const newStudent = new StudentModel({...studentData, userId});

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
        await StudentModel.findByIdAndRemove(id);
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