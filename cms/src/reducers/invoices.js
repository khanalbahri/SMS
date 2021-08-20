import {GET_INVOICES,CREATE_INVOICE} from "../constants/actionType.js";
import { getInvoices } from "../actions/invoices.js";

const invoices = (invoices=[],action)=> {
    switch (action.type) {
        case CREATE_INVOICE:
            return invoices.map((invoice)=> invoice._id === action.payload._id ? action.payload : invoice);
        case GET_INVOICES:
            return action.payload;
        default:
            return invoices;
    }
}

export default invoices;