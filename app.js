const express = require('express')
const config = require('config')
const pgp = require("pg-promise")(/*options*/);


const app = express()

app.use('/api/auth',require('./routes/auth.route'))

var db = pgp(`postgres://${config.get('dbLogin')}:${config.get('dbPassword')}@${config.get('dbHost')}:${config.get('dbPort')}/${config.get('dbName')}`);
const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log('Server started'))

db.one("SELECT login from users where user_id=1")
    .then(function (data) {
        console.log("DATA:", data.login);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });