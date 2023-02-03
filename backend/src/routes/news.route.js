import { Router } from 'express'
import { create, findAll, topNews, findById, searchByTitle, byUser, update, deleteNews, likeNews, addComment, removeComment } from '../controllers/news.controller.js'
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
newsRoute.patch('/like/:id', authMiddleware, likeNews)
newsRoute.patch('/comment/:id', authMiddleware, addComment)
newsRoute.patch('/comment/:idNews/:idComment', authMiddleware, removeComment)

export default newsRoute