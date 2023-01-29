import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const loginService = (email) => User.findOne({email: email}).select("+password")

export const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400})
