import mongoose from 'mongoose'
import { createService, findAllService, countNews, topNewsService, findByIdService, findByTitleService, byUserService, updateService, deleteService, likeNewsService, deleteLikeNewsService } from '../services/news.service.js'

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
        let { limit, offset } = req.query

        limit = Number(limit)
        offset = Number(offset)

        if(!limit) limit = 5
        if(!offset) offset = 0

        const news = await findAllService(offset, limit)
        const total = await countNews()
        const currentUrl = req.baseUrl

        const next = offset + limit
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null

        const previous = offset - limit < 0 ? null : offset - limit
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${offset}` : null

        if(news.length === 0){
            return res.status(400).send({
                message: "There are no registered news!"
            })
        }

        res.status(200).send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: news.map(item => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                avatar: item.user.avatar
            }))
        })
    } catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

export const topNews = async (req, res) => {
    try{
        const news = await topNewsService()

        if(!news){
            return res.status(400).send({
                message: "There is no registered post!"
            })
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar
            }
        })
    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }

}

export const findById = async (req, res) => {
    try{
        const { id } = req.params

        const news = await findByIdService(id)

        if(!news){
            return res.status(404).send({
                message: "News not found!"
            })
        }

        return res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar
            }
        })

    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

export const searchByTitle = async (req, res) => {
    try{
        const { title } = req.query

        const news = await findByTitleService(title)

        if(news.length === 0){
            return res.status(400).send({
                message: "There are no news with this title!"
            })
        }

        return res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                avatar: item.user.avatar
            }))
        })

    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

export const byUser = async (req, res) => {
    try{
        const id = req.userId

        const news = await byUserService(id)

        if(news.length === 0){
            return res.status(404).send({
                message: "There are no registered news"
            })
        }

        res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                avatar: item.user.avatar
            }))
        })

    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

export const update = async (req, res) => {
    try{
        const { title, text, banner } = req.body

        const { id } = req.params

        if(!title && !text && !banner){
            return res.status(400).send({
                message: "Submit at least one field to update the post!"
            })
        }

        const news = await findByIdService(id)

        if(news.user.id != req.userId){
            return res.status(400).send({
                message: "You didn't update this post!"
            })
        }

        await updateService(id, title, text, banner)

        return res.send({
            message: "Post successfully updated!"
        })

    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

export const deleteNews = async (req, res) => {
    try{
        const { id } = req.params

        const news = await findByIdService(id)

        if(news.user.id != req.userId){
            return res.status(400).send({
                message: "You didn't delete this post!"
            })
        }

        await deleteService(id)

        return res.send({
            message: "News deleted successfully!"
        })

    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

export const likeNews = async (req, res) => {
    try{
        const {id} = req.params
        const userId = req.userId

        const newsLiked = await likeNewsService(id, userId)

        if(!newsLiked){
            await deleteLikeNewsService(id, userId)
            return res.status(200).send({
                message: "Like successfully removed!"
            })
        }

        res.send({
            message: "Like done successfully!"
        })

    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}