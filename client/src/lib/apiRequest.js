import axios from "axios";

const apiRequest = axios.create(
    {
        baseURL:"http://localhost:9876/api",
        withCredentials:true,
    }
);

export default apiRequest