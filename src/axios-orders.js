import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-56b7a.firebaseio.com/'
});

export default instance;