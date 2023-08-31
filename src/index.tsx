import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes";
import {Provider} from "react-redux";
import store from "./store";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes}/>
        </ThemeProvider>
    </Provider>
);