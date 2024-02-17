import {getMovieById} from "./queries.js";
import {useQuery} from "@tanstack/react-query";
import MovieView from "../movieView/MovieView.jsx";
import "./WatchList.css"


const WatchList = () => {

    const movieIds = ['tt7286456', 'tt5001754', 'tt0371746', 'tt27687527'];

    const {data} = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const moviePromises = movieIds.map(id => getMovieById(id));
            const movies = await Promise.all(moviePromises);
            return movies.map((movie) => movie.data)
        }
    });

    return data && <MovieView movies={data}/>
}

export default WatchList;