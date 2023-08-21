import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './styles/index.css';
import {BrowserRouter} from "react-router-dom";
import state, {StateType} from "./store/state";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const renderTree = (state: StateType) => {
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

renderTree(state)