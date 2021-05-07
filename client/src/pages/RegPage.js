import React from 'react'
import logo from '../tenor.gif';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

export const RegPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo Image-right" alt="logo" align={"right"}/>
                <img src={logo} className="App-logo Image-left" alt="logo" align={"right"}/>
                <div className="card-action" align={"center"}>
                    <div className="rectangle">
                        ♂GachiK♂<br/>
                        <TextField id={"outlined-basic"} label={"♂Почта♂"} variant="outlined" color="primary"/><br/>
                        <TextField id={"outlined-basic"} label={"♂Логин♂"} variant="outlined" color="primary"/><br/>
                        <TextField id={"outlined-basic"} label={"♂Пароль♂"} variant="outlined" color="primary"/><br/>
                        <TextField id={"outlined-basic"} label={"♂Повторите пароль♂"} variant="outlined" color="primary"/><br/>
                        <Button variant="contained">♂ASS♂</Button><br/>
                        <Button onClick={GoBack} variant="contained">♂Назад♂</Button>
                    </div>
                </div>
            </header>
        </div>
    )
}
function GoBack() {
    window.open("/", "_self")
}

