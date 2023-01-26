import { Router } from "express"
import {createUser, findAll, findById} from "../controllers/user.controller.js"

const userRoute = Router()

userRoute.post('/', createUser)
userRoute.get('/', findAll)
userRoute.get('/:id', findById)

export default userRoute