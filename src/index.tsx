import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes";
import {Provider} from "react-redux";
import store from "./store";
import {createTheme, ThemeProvider} from "@mui/material";
import {orange, teal} from "@mui/material/colors";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const theme = createTheme({
    palette: {
        error: {
            main:'#ff4939'
        },
        success: {
            main: '#7acb72'
        }
    }
})

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes}/>
        </ThemeProvider>
    </Provider>
);