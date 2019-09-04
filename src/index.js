import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
// 1. A Navbar component
// 2. A MainContent component
// 3. A Footer component


ReactDOM.render(
    <App/>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
