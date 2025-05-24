import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:  "https://cart-api.alexrodriguez.workers.dev/",
	//withCredentials: true, 
});

export const nestApi = axios.create({
    baseURL:  "https://nest-backend-ukox.onrender.com/api",
    //withCredentials: true, 
});