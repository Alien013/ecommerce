import axios from "axios";
import { api } from "../urlConfig";

// Function to get the token from localStorage
const getToken = () => {
  return window.localStorage.getItem("token");
};

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: api,
  // Add headers using a function to get the token dynamically
  headers: {
    Authorization: getToken() ? `Bearer ${getToken()}` : "",
    "Content-Type": "application/json", // Add any other headers if necessary
  },
});

// Add a request interceptor to update the Authorization header with the latest token before each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

// import axios from "axios";
// import { api } from "../urlConfig";

// const token = window.localStorage.getItem("token");

// const axiosInstance = axios.create({
//   baseURL: api,
//   // Add headers if necessary
//   headers: {
//     Authorization: token ? `Bearer ${token}` : "",
//   },
// });

// export default axiosInstance;
