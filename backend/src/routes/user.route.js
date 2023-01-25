import { Router } from "express"
import userGet from "../controllers/user.controller.js"

const userRoute = Router()

userRoute.get('/', userGet)

export default userRoute