import mongoose from 'mongoose'

const connectDb = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb Connected to ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1) //1 code means failure 0 means sucess
    }

}

export default connectDb