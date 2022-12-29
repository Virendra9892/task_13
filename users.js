var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");
const taskController = require("../controllers/taskController");

/* GET users listing. */
router.post('/register',userController.registerUser);
router.get("/getAllUser",userController.getAllUser);



// GET tasks listing

router.post("/registerTask",taskController.registerTask);
router.get("/getAllTask",taskController.getAllTask);



module.exports = router;
