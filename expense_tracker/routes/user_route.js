const express=require('express')

const usercontroller=require('../controllers/user_controller')

const router=express.Router();

router.post('/adduser',usercontroller.adduser)

router.get('/alluser',usercontroller.getalluser)

router.post('/finduser',usercontroller.finduser)

module.exports=router