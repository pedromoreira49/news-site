const createUser = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body

    if(!name || !username || !email || !password || !avatar || !background){
        res.status(400).send({
            message: 'Submit all fields for registration!'
        })
    }

    res.status(201).send({
        message: "User created successfully",
        user: {
            name,
            username,
            email,
            avatar,
            background
        }
    })
}

export default createUser
