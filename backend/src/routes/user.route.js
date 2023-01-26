import { Router } from "express"
import {createUser, findAll} from "../controllers/user.controller.js"

const userRoute = Router()

userRoute.post('/', createUser)
userRoute.get('/', findAll)

export default userRoute