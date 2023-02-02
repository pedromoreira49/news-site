import { Router } from 'express'
import { create, findAll, topNews, findById, searchByTitle, byUser, update, deleteNews } from '../controllers/news.controller.js'
import { authMiddleware } from '../middlewares/auth.middlewares.js'
import { validId } from "../middlewares/global.middlewares.js"

const newsRoute = Router()

newsRoute.post('/', authMiddleware, create)
newsRoute.get('/', findAll)
newsRoute.get('/top', topNews)
newsRoute.get('/search', searchByTitle)
newsRoute.get('/byUser', authMiddleware, byUser)

newsRoute.get('/:id', authMiddleware, validId, findById)
newsRoute.patch('/:id', authMiddleware, update)
newsRoute.delete('/:id', authMiddleware, deleteNews)

export default newsRoute