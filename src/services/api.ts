import axios from "axios";

export const Api = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 2500
});
