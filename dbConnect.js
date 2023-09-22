import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/expensify"
async function dbConnect () {
    return await mongoose.connect(MONGODB_URI).then(mongoose => {
        console.log("Mongoose Server connected Successfully")
      return mongoose
    })
}

export default dbConnect