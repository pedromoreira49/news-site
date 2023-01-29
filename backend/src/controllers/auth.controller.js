import bcrypt from 'bcrypt'
import { loginService, generateToken } from '../services/auth.service.js'

export const login = async (req, res) => {
    try{
        const { email, password } = req.body

        const user = await loginService(email)

        if(!user){
            return res.status(404).send({
                message: "User or password not found!"
            })
        }

        const passwordIsValid = await bcrypt.compare(password, user.password)

        if(!passwordIsValid){
            return res.status(404).send({
                message: "User or password not found!"
            })
        }
        
        const token = generateToken(user.id)

        res.status(200).send({token})
    } catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}