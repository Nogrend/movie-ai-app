import axios from 'axios';

const apiWatchList = axios.create({
    baseURL: import.meta.env.VITE_API_WATCH_LIST_ADDRESS,
    timeout: 2000
});

export default apiWatchList;