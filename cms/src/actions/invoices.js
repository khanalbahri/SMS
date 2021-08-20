import * as api from "../api/index.js";
import {GET_INVOICES,CREATE_INVOICE} from "../constants/actionType.js";

export const getInvoices = ()=> async (dispatch)=> {
    try {
        const {data} = await api.getInvoices();

        dispatch({type:GET_INVOICES,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const createInvoice = (formData) => async (dispatch) => {
    try {
        const {data} = await api.createInvoice(formData);

        dispatch({type:CREATE_INVOICE,payload:data});
        
    } catch (error) {
        console.log(error);
    }
} 