import axios from "axios";
import { OrderPayload } from "./Orders/types";


const API_URL = process.env.REACT_APP_API_URL;

export function fetchProducts(){
    return axios(`${API_URL}/registers`)
}
export function saveOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/registers`, payload);
}

