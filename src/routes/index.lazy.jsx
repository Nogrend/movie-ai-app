import {createLazyFileRoute} from '@tanstack/react-router';
import WatchList from "../components/watchListView/WatchList.jsx";

export const Route = createLazyFileRoute('/')({
    component: WatchList,
})
