import * as api from "../api/index.js";
import {GET_STUDENTS,ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT, SEARCH_STUDENT} from "../constants/actionType.js";

export const getStudents = (page,limit)=> async (dispatch)=> {
    try {
        const {data} = await api.fetchStudents(page,limit);
        // console.log(data);
        dispatch({type:GET_STUDENTS,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const addStudent = (formData,config) => async (dispatch)=> {
    try {
        const {data} = await api.addStudent(formData,config);
        dispatch({type:ADD_STUDENT,payload:data});

    } catch (error) {
        console.log(error);
    }
}

export const deleteStudent = (id) => async (dispatch) => {
    try {
        await api.deleteStudent(id);
        dispatch({type: DELETE_STUDENT, payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const updateStudent = (id,formData) => async (dispatch) =>{
    try {
        const {data} = await api.updateStudent(id,formData);
        dispatch({type:UPDATE_STUDENT,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const searchStudent = (searchBy,search) => async (dispatch) =>{
    try {
        
        const {data} = await api.searchStudent(searchBy,search);
        dispatch({type:SEARCH_STUDENT,payload:data})

    } catch (error) {
        console.log(error);
    }
}