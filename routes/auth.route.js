const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const md5 = require('md5')

router.post('/register', async (req, res) => {
    try {
        const {email, password, name} = req.body

        let flag = await User.checkEmail(email)
        console.log(await User.checkEmail(email))
        console.log("flag=" + flag)

        if (flag) {
            return res.status(500).json({message: 'Такой пользователь уже существует'})
        }

        const hashedPassword = await md5(password)

        await User.createUser(email, hashedPassword, name)

        //console.log("test=" + test)

        res.status(201).json({message: 'Пользователь создан'})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: "ОшибОЧКА"})
    }
})


router.post('/login', async (req, res) => {

})

module.exports = router