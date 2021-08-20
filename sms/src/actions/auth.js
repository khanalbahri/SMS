import * as api from "../api/index.js";
import { AUTH ,LOGOUT} from "../constants/actionType.js";

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push("/");
    } catch (error) {
        console.log(error);
    }

}

export const signUp = (formData, config, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData, config);
        dispatch({ type: AUTH, data });
        history.push("/");

    } catch (error) {
        console.log(error);
    }
}


export const logoutFunc = (setUser,history) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT });
        // console.log("done");
        setUser(null);
        history.push("/authentication");
    } catch (error) {
        console.log(error);
    }
}