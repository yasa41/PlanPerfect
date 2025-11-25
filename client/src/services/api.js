import axios from "axios";

// =============================
// AXIOS INSTANCES
// =============================
const authAPI = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH,
  withCredentials: true,
});

const eventTypeAPI = axios.create({
  baseURL: import.meta.env.VITE_API_TYPE,
  withCredentials: true,
});

const eventAPI = axios.create({
  baseURL: import.meta.env.VITE_API_EVENT,
  withCredentials: true,
});

// =============================
// INTERCEPTORS
// =============================
authAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// =============================
// AUTH APIs
// =============================
export const registerUser = (name, email, password) => {
  return authAPI.post("/register", { name, email, password });
};

export const loginUser = (email, password) => {
  return authAPI.post("/login", { email, password });
};

export const logoutUser = () => authAPI.post("/logout");

export const requestPasswordReset = (email) => {
  return authAPI.post("/forgot-password", { email });
};

// =============================
// EVENT TYPE APIs
// =============================
export const fetchAllEventTypes = () => eventTypeAPI.get("/");
export const fetchEventTypeByName = (name) => eventTypeAPI.get(`/${name}`);

// =============================
// EVENT APIs
// =============================
export const listEvents = () => eventAPI.get("/");
export const getEventById = (id) => eventAPI.get(`/${id}`);

export const getWorkingEvents = () =>
  eventAPI.get("/working/list");

export const addWorkingEvent = (eventId) =>
  eventAPI.post("/working/add", { eventId });

export const removeWorkingEvent = (eventId) =>
  eventAPI.post("/working/remove", { eventId });

// ⭐ NEW: CREATE EVENT
export const createEvent = (data) => {
  // data = { title, description, date, venue, eventType }
  return eventAPI.post("/create", data);
};
