import { Router } from "express"
import {createUser, findAll, findById, updateUser} from "../controllers/user.controller.js"

const userRoute = Router()

userRoute.post('/', createUser)
userRoute.get('/', findAll)
userRoute.get('/:id', findById)
userRoute.patch('/:id', updateUser)

export default userRoute