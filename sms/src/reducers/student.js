import {GET_STUDENTS,ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT, SEARCH_STUDENT} from "../constants/actionType.js";

const students = (students = [],action) =>{
    switch (action.type) {
        case GET_STUDENTS:
            students = [];
            return action.payload;
        case ADD_STUDENT:
            return [...students,action.payload];
        case DELETE_STUDENT:
            return students.filter((student) => student._id !== action.payload);
        case UPDATE_STUDENT:
            return students.map((student)=> (student._id === action.payload._id ? action.payload : student));
        case SEARCH_STUDENT:
            students = [null];
            return action.payload;
        default:
            return students;
    }
}

export default students;