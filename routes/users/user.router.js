import express from "express"
import {UsersController} from "./user.controller.js"
import { UsersRepository } from "./user.repository.js"

const repository = new UsersRepository()
const controller =  new UsersController(repository)

const router = express.Router()

router.get("/client", controller.getAllStores)
router.get("/client/store/:id", controller.getAllStoreProducts)


export default router