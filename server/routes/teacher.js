import express from "express";
import {getTeachers,addTeacher, deleteTeacher,upload ,updateTeacher, searchTeacher, getTeacher} from "../controllers/teacher.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/",auth,getTeachers);
router.post("/addTeacher",upload.single("teacherImage"),auth,addTeacher);
router.delete("/deleteTeacher/:id",auth,deleteTeacher);
router.patch("/updateTeacher/:id",auth,updateTeacher);
router.get("/searchTeacher",auth,searchTeacher);
router.get("/getTeacher/:teacherId",auth,getTeacher);

export default router;