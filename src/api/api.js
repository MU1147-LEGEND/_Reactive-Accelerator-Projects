import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 1000,
});

const token = "3wgtsagdgasdf";

// request intercepter
api.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = "Bearer " + token;
        // console.log(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//response intercepter
api.interceptors.response.use(
    (response) => {
        // console.log(response);
        return response;
    },
    (err) => {
        if (err.response) {
            err.message = `Error status: ${err.response.status} - message: ${err.response.data}`;
        } 
        return Promise.reject(err);
    }
);

export default api;
