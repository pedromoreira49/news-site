import { Router } from 'express'
import { create, findAll, topNews } from '../controllers/news.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'

const newsRoute = Router()

newsRoute.post('/', authMiddleware, create)
newsRoute.get('/', findAll)
newsRoute.get('/top', topNews)

export default newsRoute