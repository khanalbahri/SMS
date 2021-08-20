import {combineReducers} from "redux";

import students from "./student";
import teachers from "./teacher";
import authReducer from "./auth";

export const reducers = combineReducers({students,teachers,authReducer});