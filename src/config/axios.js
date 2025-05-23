import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:  "https://cart-api.alexrodriguez.workers.dev/",
	//withCredentials: true, 
});

export const nestApi = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api/" : import.meta.env.VITE_NEST_API_URL,
    //withCredentials: true, 
});