import axios from "axios";
import { api } from "../urlConfig";

// Function to get the token from localStorage
const getToken = () => {
  return window.localStorage.getItem("token");
};

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in headers dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // console.log("Token added to headers:", token); // Log token
    } else {
      // console.log("No token found");
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
