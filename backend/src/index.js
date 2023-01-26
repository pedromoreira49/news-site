import express from 'express'
import userRoute from './routes/user.route.js'
import connect from './database/db.js'

const app = express()
const port = 3000

connect()
app.use(express.json())

app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`app running on port: ${port}`)
})