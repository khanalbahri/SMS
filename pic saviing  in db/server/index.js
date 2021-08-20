import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import studentRoutes from './routes/student.js';
import teacherRoutes from "./routes/teacher.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));

app.use("/student",studentRoutes);
app.use("/teacher",teacherRoutes);
app.use("/user",userRoutes);


const CONNECTION_URL = "mongodb://localhost:27017/sms";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=> app.listen(PORT,()=> console.log(`server running on port ${PORT}`)))
.catch((error)=> console.log(error));