import axios from "axios";
import apiUrl from '../baseUrl'

export const serviceLoginUser = (payload) => 
    axios.post(`${apiUrl}/signin`, payload);