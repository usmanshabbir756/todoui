import axios from "axios";

const BASE_URL_API = "http://localhost:8080/api/todos"

export const getAllTodos = () => axios.get(BASE_URL_API);