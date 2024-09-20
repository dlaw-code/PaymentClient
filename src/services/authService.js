import axios from 'axios';

// Set your API base URL
const API_URL = 'http://localhost:5000/api/auth'; // Example: adjust with your backend URL

// Register User
const register = (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};

// Login User
const login = (loginData) => {
    return axios.post(`${API_URL}/login`, loginData);
};

export default {
    register,
    login
};
