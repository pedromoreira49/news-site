import User from "../models/User.js"

const create = (body) => User.create(body)

export default {create}
