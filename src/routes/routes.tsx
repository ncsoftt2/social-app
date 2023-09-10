import React from "react"
import {createBrowserRouter, Navigate} from 'react-router-dom'
import { App } from '../components/app/App'
import { Profile } from '../components/profile/Profile'
import {UsersPage} from "../pages/UsersPage";
import {Login} from "../components/login/Login";
import {ProtectedRoute} from "../components/protected-route/Protected-Route";

export const routes = createBrowserRouter([
    {
        path: '/social-app',
        element: <App />,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/social-app/profile/*',
                errorElement: <div>error</div>,
                element: (
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                )
            },
            {
                path: '/social-app/users',
                element: (
                    <ProtectedRoute>
                        <UsersPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: '/social-app/login',
                element: <Login />
            }
        ]
    }
])