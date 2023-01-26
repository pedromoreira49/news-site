import mongoose from "mongoose"
import * as dotenv from 'dotenv'

dotenv.config()

const connect = () => {
    console.log('Waiting connection...')

    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qnf2ekc.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Database Connected: Mongodb Atlas')).catch((err) => console.log(err))
}

export default connect