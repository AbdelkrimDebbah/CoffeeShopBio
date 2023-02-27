const express = require("express");

const router = express.Router();
const checkUserMiddleware = require('../middlewares/CheckUserMiddleware.js');
const registerUserController = require('../controllers/controllerUser/registerUserController.js');
const checkEmailMiddleware = require('../middlewares/CheckEmailMiddleware');
const LoginUserController = require('../controllers/controllerUser/LoginUserController.js');
const checkTokenMiddleware = require("../middlewares/CheckTokenMiddleware.js");
const getInfosUserController = require("../controllers/controllerUser/InfosUserController.js");
const ModifUserController = require("../controllers/controllerUser/ModifUserController.js");
const DeleteUserController = require("../controllers/controllerUser/DeleteUserController.js");
const getInfosUsersController = require("../controllers/controllerUser/InfosUsersController.js");

router.post("/register", checkUserMiddleware, checkEmailMiddleware, registerUserController);
router.post("/login", LoginUserController);

router.get("/me", checkTokenMiddleware, getInfosUserController);
router.get("/", checkTokenMiddleware, getInfosUsersController)
router.put("/:user_id", checkTokenMiddleware, ModifUserController);

router.delete("/:user_id", checkTokenMiddleware, DeleteUserController);




module.exports = router