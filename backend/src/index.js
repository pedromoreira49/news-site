import express from 'express'
import dotenv from 'dotenv'
import connect from './database/db.js'

import userRoute from './routes/user.route.js'
import loginRoute from './routes/auth.route.js'
import newsRoute from './routes/news.route.js'

dotenv.config()
const app = express()
const port = 3000

connect()
app.use(express.json())

app.use('/user', userRoute)
app.use('/login', loginRoute)
app.use('/news', newsRoute)

app.listen(port, () => {
    console.log(`app running on port: ${port}`)
})