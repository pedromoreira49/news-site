import { Router } from 'express'
import { create, findAll } from '../controllers/news.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'

const newsRoute = Router()

newsRoute.post('/', authMiddleware, create)
newsRoute.get('/', findAll)

export default newsRoute