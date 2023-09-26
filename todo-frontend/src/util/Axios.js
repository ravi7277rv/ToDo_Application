import axios from 'axios';

const Axios = axios.create({
    baseURL:"http://127.0.0.1:3636/api/v1",
});

export {Axios}