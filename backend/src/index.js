import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import connect from './database/db.js'

dotenv.config()
const app = express()
const port = 3000

connect()
app.use(express.json())

app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`app running on port: ${port}`)
})