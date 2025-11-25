// services/authService.js
import axios from "axios";

// Base axios instance
const authAPI = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH,
  withCredentials: true,
});

authAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const registerUser = (name, email, password) => {
  return authAPI.post("/register", { name, email, password });
};

export const loginUser = (email, password) => {
  return authAPI.post("/login", { email, password });
};

export const logoutUser = () => {
  return authAPI.post("/logout");
};

// Add Forgot Password request API call
export const requestPasswordReset = (email) => {
  return authAPI.post("/forgot-password", { email });
};
