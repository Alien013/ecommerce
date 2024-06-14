import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2000/api", // Update the base URL to match your API's base URL
});

export default axiosInstance;
