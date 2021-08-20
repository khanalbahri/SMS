import express from "express";
import {getTeachers,addTeacher, deleteTeacher, updateTeacher} from "../controllers/teacher.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/",auth,getTeachers);
router.post("/addTeacher",auth,addTeacher);
router.delete("/deleteTeacher/:id",auth,deleteTeacher);
router.patch("/updateTeacher/:id",auth,updateTeacher);

export default router;