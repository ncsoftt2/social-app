import React from "react"
import {createBrowserRouter} from 'react-router-dom'
import { App } from '../components/app/App'
import { Profile } from '../components/profile/Profile'
import {UsersPage} from "../pages/UsersPage";
import {Login} from "../components/login/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/profile/*',
                element: <Profile />
            },
            {
                path: '/users',
                element: <UsersPage/>,
                errorElement: <div>error</div>
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])