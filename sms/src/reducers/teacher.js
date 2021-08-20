import { GET_TEACHERS, ADD_TEACHER, DELETE_TEACHER, UPDATE_TEACHER, SEARCH_TEACHER } from "../constants/actionType.js";

const teachers = (teachers = [], action) => {
    switch (action.type) {
        case GET_TEACHERS:
            return action.payload;
        case ADD_TEACHER:
            return [...teachers, action.payload];
        case DELETE_TEACHER:
            return teachers.filter((teacher) => teacher._id !== action.payload);
        case UPDATE_TEACHER:
            return teachers.map((teacher) => teacher._id === action.payload._id ? action.payload : teacher);
        case SEARCH_TEACHER:
            teachers = [null];
            return action.payload;
        default:
            return teachers;
    }
}

export default teachers;