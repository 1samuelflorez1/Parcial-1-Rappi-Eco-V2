import express from "express"
import { UsersController } from "./user.controller.js"
import { UsersRepository } from "./user.repository.js"

const repository = new UsersRepository()
const controller = new UsersController(repository)

const router = express.Router()

router.get("/client", controller.getAllStores)
router.get("/client/store/:id", controller.getAllStoreProducts)
router.post("/restaurant/store/product", controller.createNewProduct)
router.put("/restaurant/store/status", controller.toggleOpenStore)
router.post("/client/order", controller.createOrder)
router.get("/client/totalorders", controller.getTotalOrders)
router.get("/delivery/totalorderdelivery", controller.getTotalOrdersDelivery)
router.put("/delivery/totalorders/status", controller.updateOrderOntheWay)

export default router