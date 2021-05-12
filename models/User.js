const pgp = require("pg-promise")(/*options*/);
const config = require('config')

const db = pgp(`postgres://${config.get('dbLogin')}:${config.get('dbPassword')}@${config.get('dbHost')}:${config.get('dbPort')}/${config.get('dbName')}`);

module.exports = {
    async checkEmail(email) {

        // let flag
        return await db.one(`SELECT data from users where login='${email}'`)
            .then(function () {
                //flag = true
                return true;
            })
            .catch(function () {
                //console.log("false")
                //flag = false
                 return false;
            });
        //return flag

        // let data = await db.oneOrNone(`SELECT data from users where login='${email}' limit 1`)
        //
        // if (data){
        //     return true
        // } else {
        //     return false
        // }

    },
    createUser(email, password, name) {
        // console.log("login="+login+",password="+password+",name="+name)
        db.none(`INSERT INTO Users(login,password,data) values('${email}','${password}','{"name":"${name}"}');`)
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                console.log("Ошибка при добавлении пользователя: " + error)
                return (error);
            });
    }
}


