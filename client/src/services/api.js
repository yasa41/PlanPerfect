import axios from "axios";

// Auth API 
const authAPI = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH, withCredentials: true,
});


// Response interceptor for all APIs
const handleResponse = (response) => response;
const handleError = (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
  console.error('API Error:', error);
  return Promise.reject(error);
};

authAPI.interceptors.response.use(handleResponse, handleError);

// Auth functions
export const registerUser = (name, email, password) => {
  return authAPI.post("/register", { name, email, password });
};

export const loginUser = (email, password) => {
  return authAPI.post("/login", { email, password });
};

export const logoutUser = () => {
  return authAPI.post("/logout");
};

