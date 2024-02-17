import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {routeTree} from './routeTree.gen'
import {createRouter, RouterProvider} from "@tanstack/react-router";

const router = createRouter({routeTree})

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>,)
