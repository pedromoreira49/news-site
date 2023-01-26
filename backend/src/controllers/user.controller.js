import {createService, findAllService} from "../services/user.service.js"

export const createUser = async (req, res) => {
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
}

export const findAll = async (req, res) => {
    const users = await findAllService()

    if(users.length === 0){
        return res.status(400).send({
            message: "There are no registered users"
        })
    }

    res.status(200).send({users})
}


