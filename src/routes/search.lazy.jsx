import { createLazyFileRoute } from '@tanstack/react-router'
import MovieSearch from "../components/movieSearch/MovieSearch.jsx";

export const Route = createLazyFileRoute('/search')({
  component: MovieSearch
})