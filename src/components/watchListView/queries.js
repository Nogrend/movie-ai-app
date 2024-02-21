import apiOpenMovieDatabase from "../../config/apiOpenMovieDatabase.js";
import apiWatchList from "../../config/apiWatchList.js";

export const getMovieById = async (id) => {
    return apiOpenMovieDatabase.get(`/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
}

export const getWatchListById = (id) => {
    return apiWatchList.get(`/watchlist/${id}`);
}


