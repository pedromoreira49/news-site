import { Router } from 'express'
import { login } from '../controllers/auth.controller.js'

const loginRoute = Router()

loginRoute.post('/', login)

export default loginRoute
