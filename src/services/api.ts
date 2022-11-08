import axios from "axios";

const token = localStorage.getItem("RPlace:Token");

export const Api = axios.create({
  baseURL: "https://api-tech-recruiters.herokuapp.com",
  timeout: 2500,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
