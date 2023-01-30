import mongoose from 'mongoose'
import { createService, findAllService } from '../services/news.service.js'

export const create = async (req, res) => {
    try{
        const { title, text, banner } = req.body

        if(!title || !text || !banner){
            return res.status(400).send({
                message: "Submit all fields for create News!"
            })
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId
        })

        res.status(201).send({
            message: "News created successfully!"
        })
    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

export const findAll = async (req, res) => {
    try{
        const news = await findAllService()

        if(news.length === 0){
            return res.status(400).send({
                message: "There are no registered news!"
            })
        }

        res.status(200).send(news)
    } catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}