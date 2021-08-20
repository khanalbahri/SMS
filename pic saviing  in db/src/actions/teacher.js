import * as api from '../api/index.js';
import {GET_TEACHERS,ADD_TEACHER, DELETE_TEACHER, UPDATE_TEACHER} from "../constants/actionType.js";

export const getTeachers = (page,limit)=> async (dispatch)=> {
    try {
        const {data} = await api.getTeachers(page,limit);
        // console.log(page,limit);
        dispatch({type:GET_TEACHERS,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const addTeacher = (formData) => async (dispatch) =>{
    try {
        const {data} = await api.addTeacher(formData);
        dispatch({type:ADD_TEACHER,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteTeacher = (id) => async (dispatch) => {
    try {
        await api.deleteTeacher(id);
        dispatch({type:DELETE_TEACHER,payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const updateTeacher = (id,formData) => async(dispatch) => {
    try {
        const {data} = await api.updateTeacher(id,formData);
        dispatch({type:UPDATE_TEACHER,payload:data});
    } catch (error) {
        console.log(error);
    }
}