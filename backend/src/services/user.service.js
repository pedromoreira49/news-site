import User from "../models/User.js"

export const createService = (body) => User.create(body)

export const findAllService = () => User.find()

