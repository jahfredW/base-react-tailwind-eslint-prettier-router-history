import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://localhost:8000',
  withCredentials: true,
});

axios.defaults.headers['content-type'] = 'application/json';
axios.defaults.withCredentials = true;

if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
}

export default Axios;
