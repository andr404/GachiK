const {Router} = require('express')
const router = Router()

router.post('/register', async (req,res) => {
    try {
        const {email,password,name,lastname} = req.body
    } catch (e) {
        res.status(500).json({message:"ОшибОЧКА"})
    }
})


router.post('/login', async (req,res) => {

})

module.exports = router