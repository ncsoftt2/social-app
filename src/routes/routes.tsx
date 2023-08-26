import {createBrowserRouter} from "react-router-dom";
import React from "react";
import App from "../components/App/App";
import Profile from "../components/Profile/Profile";
import Dialogs from "../components/Dialogs/Dialogs";
import Users from "../components/Users/Users";

export const routes = createBrowserRouter([
    {
        path:"/social-app",
        element: <App/>,
        errorElement: <div>error</div>,
        children: [
            {
                path: '/social-app/profile/*',
                element: <Profile/>
            },
            {
                path: '/social-app/dialogs/*',
                element: <Dialogs/>
            },
            {
                path: '/social-app/users',
                element: <Users/>
            },
        ]
    }
])