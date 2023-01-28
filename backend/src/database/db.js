import mongoose from "mongoose"

const connect = () => {
    console.log('Waiting connection...')

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Database Connected: Mongodb Atlas')).catch((err) => console.log(err))
}

export default connect