import axios from 'axios';

const API_URL = 'https://localhost:44304/api/auth';

const register = (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};

const login = (loginData) => {
    return axios.post(`${API_URL}/login`, loginData);
};

export default {
    register,
    login
};
