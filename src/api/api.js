import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Replace this with your backend server URL
  timeout: 5000, // You can adjust the timeout value as needed
});

export default instance;
