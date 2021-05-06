import React from 'react'
import logo from '../index.gif';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const AuthPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo Image-right" alt="logo" align={"right"}/>
                <img src={logo} className="App-logo Image-left" alt="logo" align={"right"}/>
                <div className="card-action" align={"center"}>
                    ♂GachiK♂
                    <p>
                    <TextField id={"outlined-basic"} label={"♂Логин♂"} variant="outlined" color="primary" /><br/>
                    </p>
                    <TextField id={"outlined-basic"} label={"♂Пароль♂"} variant="outlined" color="primary" /><br/>
                    <p>
                    <Button variant="contained">♂ASS♂</Button><br/>
                    </p>
                    <Button variant="contained">♂Регистрация♂</Button>
                </div>
            </header>
        </div>
    )
}