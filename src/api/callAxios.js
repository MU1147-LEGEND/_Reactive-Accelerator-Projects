import axios from "axios";

export const callAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});