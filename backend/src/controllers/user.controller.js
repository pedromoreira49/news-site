import create from "../services/user.service.js"

const createUser = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body

    if(!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({
            message: 'Submit all fields for registration!'
        })
    }

    const user = await create.create(req.body)

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

export default createUser
