import axios from "axios";

const API_URL = "https://escola-online.herokuapp.com/";

const api = axios.create({
    baseURL: API_URL,
});

export default api;
