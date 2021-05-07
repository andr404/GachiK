import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import {useRoutes, Route} from "./routes";

function App() {
    const routes = useRoutes()
    return (
        <Router>
            <div className="App">
                {routes}
            </div>
        </Router>
    );
}
export default App;
