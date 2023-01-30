import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { findByIdService } from '../services/user.service.js'

dotenv.config()

export const authMiddleware = (req, res, next) => {
    try{
        const {authorization} = req.headers

        if(!authorization){
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
    
        const parts = authorization.split(" ")
    
        if(parts.length !== 2){
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
    
        const [schema, token] = parts
    
        if(schema !== "Bearer"){
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
    
        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if(err){
                return res.status(401).send({
                    message: "token invalid!"
                })
            }

            const user = await findByIdService(decoded.id)

            if(!user || !user.id){
                return res.status(404).send({
                    message: "Invalid token!"
                })
            }

            req.userId = user._id
            next()
        })
    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}