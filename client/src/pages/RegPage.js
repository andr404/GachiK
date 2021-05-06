import React from 'react'
import logo from '../index.gif';

export const RegPage = () => {
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
                    <button>
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
    )
}