import axios from 'axios';

const apiOpenMovieDatabase = axios.create({
    baseURL: import.meta.env.VITE_API_WATCH_OPEN_MOVIE_DATABASE,
    timeout: 2000
});

export default apiOpenMovieDatabase;