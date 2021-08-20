import axios from "axios";

const url = "http://localhost:5000/invoices";

export const getInvoices = ()=> axios.get(url);

export const createInvoice = (formData) => axios.post(url,formData);