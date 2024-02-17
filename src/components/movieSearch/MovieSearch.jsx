import {useSearch} from "@tanstack/react-router";
import {useQuery} from "@tanstack/react-query";
import {searchMovies} from "./queries.js";
import MovieView from "../movieView/MovieView.jsx";

const MovieSearch = () => {
    const {query} = useSearch();

    const {data} = useQuery({
        queryKey: ['data', query],
        queryFn: () => {
            return searchMovies(query);
        }
    });

    return data && <MovieView movies={data.data["Search"]}/>
}

export default MovieSearch;
