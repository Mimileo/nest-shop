import axios from "axios";

const axiosInstance = axios.create({
	baseURL:  "https://cart-api.alexrodriguez.workers.dev/",
	//withCredentials: true, 
});

export default axiosInstance;