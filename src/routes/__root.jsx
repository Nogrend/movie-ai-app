import {createRootRoute} from '@tanstack/react-router'
import App from "../App.jsx";

export const Route = createRootRoute({
    component: () => {
        return <App/>
    }
})