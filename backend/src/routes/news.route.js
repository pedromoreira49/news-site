import { Router } from 'express'
import { create, findAll } from '../controllers/news.controller.js'

const newsRoute = Router()

newsRoute.post('/', create)
newsRoute.get('/', findAll)

export default newsRoute