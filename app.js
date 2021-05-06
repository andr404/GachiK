const express = require('express')
const config = require('config')
const pgp = require("pg-promise")(/*options*/);


const app = express()

app.use('/api/auth',require('./routes/auth.route'))

var db = pgp(`postgres://${config.get('dbLogin')}:${config.get('dbPassword')}@${config.get('dbHost')}:${config.get('dbPort')}/${config.get('dbName')}`);
const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log('Server started'))

db.one("SELECT data from users where user_id='34a3a3bb-facf-4a77-9795-40c82a1caeda'")
    .then(function (data) {
        console.log("DATA:", data.data.name);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });