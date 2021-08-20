import express from 'express';
import {getStudents,addStudent, deleteStudent, updateStudent} from "../controllers/student.js"
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/",auth,getStudents);
router.post("/addStudent",auth,addStudent);
router.delete("/deleteStudent/:id",auth,deleteStudent);
router.patch("/updateStudent/:id",auth,updateStudent);

export default router;