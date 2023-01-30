import News from '../models/News.js'

export const createService = (body) => News.create(body)

export const findAllService = () => News.find()
