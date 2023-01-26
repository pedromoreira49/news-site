import { Router } from "express"
import createUser from "../controllers/user.controller.js"

const userRoute = Router()

userRoute.post('/', createUser)

export default userRoute