import logo from './index.gif';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import {useRoutes} from "./routes";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p className = "App-text">
                    ♂GachiK♂
                </p>
                <p align={"center"} className = "Index-text">
                    ♂Логин♂<br/>
                    <input type="text" size="40"/>
                </p>
                <p align={"center"} className = "Index-text">
                    ♂Пароль♂<br/>
                    <input type="password" size="40"/>
                </p>
                <p align={"center"} className = "Index-text">
                    <button onClick={click}>
                        ♂ASS♂
                    </button>
                </p>
                <p align={"center"} className = "Index-text">
                    <button>
                        ♂Регистрация♂
                    </button>
                </p>
            </header>
        </div>
    );
}

function click() {
    alert('♂Fuck you♂')
}

function registration() {
    window.open('./registrationPage.js', '_self')
}

export default App;
