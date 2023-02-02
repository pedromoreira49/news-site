import { Router } from 'express'
import { create, findAll, topNews, findById } from '../controllers/news.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'
import { validId } from "../middlewares/global.middlewares.js"

const newsRoute = Router()

newsRoute.post('/', authMiddleware, create)
newsRoute.get('/', findAll)
newsRoute.get('/top', topNews)
newsRoute.get('/:id', validId, findById)

export default newsRoute