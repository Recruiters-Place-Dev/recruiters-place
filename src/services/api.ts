import axios from "axios";

const token = localStorage.getItem("RPlace:Token");

export const Api = axios.create({    
    baseURL: 'http://localhost:3001',
    timeout: 2500,
    headers: {
        "Authorization": `Bearer ${token}`
    }
});
