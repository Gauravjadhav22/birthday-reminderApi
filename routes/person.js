const router= require('express').Router()

const {GetBirthday,PostBirthday}= require("../controllers/person")



router.get('/getBirthday',GetBirthday)
router.post('/getBirthday',PostBirthday)


module.exports=router