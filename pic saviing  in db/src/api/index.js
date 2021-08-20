import axios from "axios";

// const url = "http://localhost:5000";
const API = axios.create({baseURL: "http://localhost:5000"});

API.interceptors.request.use((req)=> {
    if(localStorage.getItem("profile")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }
    return req;
})


export const fetchStudents = (page,limit)=> API.get(`/student?page=${page}&limit=${limit}`);
export const addStudent = (formData)=> API.post(`/student/addStudent`,formData);
export const deleteStudent = (id) => API.delete(`/student/deleteStudent/${id}`);
export const updateStudent = (id,formData) => API.patch(`/student/updateStudent/${id}`,formData);

export const getTeachers = (page,limit)=> API.get(`/teacher?page=${page}&limit=${limit}`);
export const addTeacher  = (formData)=> API.post(`/teacher/addTeacher`,formData);
export const deleteTeacher = (id) => API.delete(`/teacher/deleteTeacher/${id}`);
export const updateTeacher = (id,formData) => API.patch(`/teacher/updateTeacher/${id}`,formData);

export const signIn = (formData) => API.post("/user/signin",formData);
export const signUp = (formData) => API.post("/user/signup",formData);