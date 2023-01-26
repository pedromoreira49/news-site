import express from 'express'
import userRoute from './routes/user.route.js'
import connect from './database/db.js'

const app = express()

connect()
app.use(express.json())

app.use('/user', userRoute)

/* app.get('/', (req, res) => {
    res.send({
        message: 'hello world'
    })
}) */

app.listen(3000, () => {
    console.log('app running')
})