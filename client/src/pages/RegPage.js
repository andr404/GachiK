import React, {useContext, useEffect, useState} from 'react'
import logo from '../tenor.gif';
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

export const RegPage = () => {

    const {loading, request, error, clearError} = useHttp()
    const message = useMessage()
    const [form, setForm] = useState({
        email: '', password: '', name:''
    })

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {
            alert(e)
        }
    }

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo Image-right" alt="logo" align={"right"}/>
                <img src={logo} className="App-logo Image-left" alt="logo" align={"right"}/>
                <div className="card-action" align={"center"}>
                    <div className="rectangle">
                        ♂GachiK♂<br/>
                        <TextField
                            onChange={changeHandler}
                            name="email"
                            id={"outlined-basic"}
                            label={"♂Почта♂"}
                            variant="outlined"
                            value={form.email}
                            color="primary"/><br/>
                        <TextField
                            onChange={changeHandler}
                            id={"outlined-basic"}
                            label={"♂Имя♂"}
                            name="name"
                            variant="outlined"
                            value={form.name}
                            color="primary"/><br/>
                        <TextField
                            onChange={changeHandler}
                            name="password"
                            id={"outlined-basic"}
                            label={"♂Пароль♂"}
                            variant="outlined"
                            value={form.password}
                            color="primary"/><br/>
                        <TextField
                            id={"outlined-basic"}
                            label={"♂Повторите пароль♂"}
                            variant="outlined"
                            color="primary"/><br/>
                        <Button
                            onClick={registerHandler}
                            disabled={loading}
                            variant="contained">♂ASS♂</Button><br/>
                        <Button
                            onClick={GoBack}
                            disabled={loading}
                            variant="contained">♂Назад♂</Button>
                    </div>
                </div>
            </header>
        </div>
    )
}

function GoBack() {
    window.open("/", "_self")
}

