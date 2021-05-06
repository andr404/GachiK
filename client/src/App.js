import logo from './index.gif';
import './App.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
          <p className = "App-text">
              GachiK
          </p>
          <p align={"center"} className = "Index-text">
              Логин<br/>
              <input type="text" size="40"></input>
          </p>
          <p align={"center"} className = "Index-text">
              Пароль<br/>
              <input type="password" size="40"></input>
          </p>
          <p align={"center"} className = "Index-text">
              <input id = "button" value="Нажми меня" type="button"/>
          </p>
      </header>
    </div>
  );
}
function click(){
    alert("sosi")
}
<script>
    button.onClick = function(){
        alert("sosi")
    };
</script>
export default App;
