import { Router } from "express"
import {createUser, findAll, findById, updateUser} from "../controllers/user.controller.js"
import { validId, validUser } from "../middlewares/global.middlewares.js"

const userRoute = Router()

userRoute.post('/', createUser)
userRoute.get('/', findAll)
userRoute.get('/:id', validId, validUser,findById)
userRoute.patch('/:id', validId, validUser,updateUser)

export default userRoute