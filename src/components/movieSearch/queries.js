import apiOpenMovieDatabase from "../../config/apiOpenMovieDatabase.js";

export const searchMovies = async (query) => {
    return apiOpenMovieDatabase.get(`/?s=${query}&apikey=${import.meta.env.VITE_API_KEY}`);
}
