import axios from "axios";
import apiUrl from '../baseUrl'

export const serviceRegisterUser = (payload) => 
    axios.post(`${apiUrl}/users`, payload);