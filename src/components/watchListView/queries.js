import apiOpenMovieDatabase from "../../config/apiOpenMovieDatabase.js";

export const getMovieById = async (id) => {
    return apiOpenMovieDatabase.get(`/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
}


