import mongoose from "mongoose"
import {createService, findAllService, findByIdService, updateService} from "../services/user.service.js"

export const createUser = async (req, res) => {
    
    try{
        const {name, username, email, password, avatar, background} = req.body

        if(!name || !username || !email || !password || !avatar || !background){
            res.status(400).send({
                message: 'Submit all fields for registration!'
            })
        }

        const user = await createService(req.body)

        if(!user){
            return res.status(400).send({
                message: "Error creating User"
            })
        }

        res.status(201).send({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background
            }
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}

export const findAll = async (req, res) => {
    try{
        const users = await findAllService()

        if(users.length === 0){
            return res.status(400).send({
                message: "There are no registered users"
            })
        }

        res.status(200).send(users)
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}

export const findById = async (req, res) => {
    try{
        const user = req.user

        res.send(user)
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}

export const updateUser = async (req, res) => {
    try{
        const {name, username, email, password, avatar, background} = req.body

        if(!name && !username && !email && !password && !avatar && !background){
            res.status(400).send({
                message: 'Submit at least one field for update!'
            })
        }

        const {id, user} = req

        await updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        )

        res.send({
            message: "User successfully updated!"
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
}
