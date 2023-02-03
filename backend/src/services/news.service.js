import News from '../models/News.js'

export const createService = (body) => News.create(body)

export const findAllService = (offset, limit) => News.find()
    .sort({_id: -1})
    .skip(offset)
    .limit(limit)
    .populate("user")

export const countNews = () => News.countDocuments()

export const topNewsService = () => News.findOne().sort({_id: -1}).populate("user")

export const findByIdService = (id) => News.findById(id).populate("user")

export const findByTitleService = (title) => News.find({
    title: {$regex: `${title || ""}`, $options: "i"}, //opt = i (Case insensitive)
}).sort({ _id: -1 }).populate("user")

export const byUserService = (id) => News.find({user: id}).sort({ _id: -1 }).populate("user")

export const updateService = (id, title, text, banner) => News.findOneAndUpdate({ _id: id}, {title, text, banner}, {rawResult: true})

export const deleteService = (id) => News.findByIdAndDelete({ _id: id })

export const likeNewsService = (idNews, userId) => News.findOneAndUpdate(
    {_id: idNews, "likes.userId": {$nin: [userId]}}, //$nin (validation user like in post)
    {$push: {likes: {userId, created: new Date()}} //$push (add like of user in the post)
})

export const deleteLikeNewsService = (idNews, userId) => News.findOneAndUpdate(
    {_id: idNews},
    {$pull: {likes: {userId}} //$pull (remove like of user in the post)
})
