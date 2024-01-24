const router=require('express').Router();
const mainuser_controller=require('../controller/user.js')


router.post("/users",mainuser_controller.register);
router.get("/user",mainuser_controller.userDisplay);
router.delete("/deluser/:email",mainuser_controller.deluser);
router.post("/auth",mainuser_controller.auth)
module.exports=router;