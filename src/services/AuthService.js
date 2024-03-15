import axios from "axios";

const AUTH_REST_API_BASE_URL="http://localhost:8080/api/auth";

export const registerApiCall=(registerObj)=>axios.post(AUTH_REST_API_BASE_URL+"/register",registerObj);

export const loginApiCall = (loginObj) => axios.post(AUTH_REST_API_BASE_URL+'/login',loginObj);