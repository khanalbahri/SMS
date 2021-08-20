import axios from "axios";
import { URL } from "../constants/actionType";

// const url = "http://localhost:5000";
const API = axios.create({baseURL: URL});

API.interceptors.request.use((req)=> {
    if(localStorage.getItem("profile")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
})


export const fetchStudents = (page,limit)=> API.get(`/student?page=${page}&limit=${limit}`);
export const addStudent = (formData,config)=> API.post(`/student/addStudent`,formData,config);
export const deleteStudent = (id) => API.delete(`/student/deleteStudent/${id}`);
export const updateStudent = (id,formData) => API.patch(`/student/updateStudent/${id}`,formData);
export const searchStudent = (searchBy,search) => API.get(`/student/searchStudent?searchBy=${searchBy}&search=${search}`);

export const getTeachers = (page,limit)=> API.get(`/teacher?page=${page}&limit=${limit}`);
export const addTeacher  = (formData,config)=> API.post(`/teacher/addTeacher`,formData,config);
export const deleteTeacher = (id) => API.delete(`/teacher/deleteTeacher/${id}`);
export const updateTeacher = (id,formData) => API.patch(`/teacher/updateTeacher/${id}`,formData);
export const searchTeacher = (searchBy,search) => API.get(`/teacher/searchTeacher?searchBy=${searchBy}&search=${search}`);


export const signIn = (formData) => API.post("/user/signin",formData);
export const signUp = (formData,config) => API.post("/user/signup",formData,config);