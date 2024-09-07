// src/services/authService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

console.log("api url : " + API_URL);
// Register User
const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, {
    name, email, password
  });
  return response.data;
};

// Login User
// authService.js
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user data
  }
  return response.data;
};


// Logout User
const logout = () => {
  localStorage.removeItem('user');
};

// Exporting the object
const authService = {
  register,
  login,
  logout
};

export default authService;
