const express = require('express')
const config = require('config')

const pgp = require("pg-promise")(/*options*/);

const db = pgp(`postgres://${config.get('dbLogin')}:${config.get('dbPassword')}@${config.get('dbHost')}:${config.get('dbPort')}/${config.get('dbName')}`);


const app = express()

app.use(express.json({ "extended": true }))

app.use('/api/auth',require('./routes/auth.route'))

const PORT = config.get('port') || 5000

app.listen(PORT, () => console.log('Server started'))

db.one(`SELECT data from users where login='rava21645@mail.ru'`)
    .then(function (data) {
        //console.log(data.data.name)

    })
    .catch(function (error) {
        //console.log("false")
    });
