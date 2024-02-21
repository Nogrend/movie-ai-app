import {getMovieById, getWatchListById} from "./queries.js";
import {useQuery} from "@tanstack/react-query";
import MovieView from "../movieView/MovieView.jsx";
import "./WatchList.css"

const WatchList = () => {

    const watchListId = "f9051bf2-c865-487a-854b-25c587688e68";

    const {data: movieIds} = useQuery({
        queryKey: ['movieIds'],
        queryFn: () => {
            return getWatchListById(watchListId);
        },
        select: (data) => data.data["movieIds"]
    });

    const {data: movieDetails} = useQuery({
        queryKey: ['movieDetails'],
        queryFn: async () => {
            const moviePromises = movieIds.map(id => getMovieById(id));
            const movies = await Promise.all(moviePromises);
            return movies.map((movie) => movie.data)
        },
        enabled: !!movieIds
    });

    return movieDetails && <MovieView movies={movieDetails}/>
}

export default WatchList;