import express from 'express';
import {getStudents,addStudent, deleteStudent,upload, updateStudent,searchStudent, getStudent} from "../controllers/student.js"
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/",auth,getStudents);
router.post("/addStudent",upload.single("studentImage"),auth,addStudent);
router.delete("/deleteStudent/:id",auth,deleteStudent);
router.patch("/updateStudent/:id",auth,updateStudent);
router.get("/searchStudent",auth,searchStudent);
router.get("/getStudent/:studentId",auth,getStudent);

export default router;