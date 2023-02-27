const express = require("express");
const CreateProductsController = require("../controllers/controllerProducts/CreateProductsController");
const DeleteProductsController = require("../controllers/controllerProducts/DeleteProductsController");
const ListProductsController = require("../controllers/controllerProducts/ListProductsControllers");
const ListProductsUserController = require("../controllers/controllerProducts/ListProductsUsercontroller");
const ModifProductsController = require("../controllers/controllerProducts/ModifProductsController");
const checkTokenMiddleware = require("../middlewares/CheckTokenMiddleware.js");

const router = express.Router();



router.post("/", checkTokenMiddleware ,CreateProductsController);

router.get("/", ListProductsController),
router.get("/:userId", ListProductsUserController);

router.put("/:productId", checkTokenMiddleware, ModifProductsController);

router.delete("/:productId", checkTokenMiddleware, DeleteProductsController)




module.exports = router;