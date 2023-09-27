import mongoose from 'mongoose'
const ATLAS_URI = process.env.ATLAS_URI || "mongodb://127.0.0.1:27017/expensify"
async function dbConnect () {
    return await mongoose.connect(ATLAS_URI).then(mongoose => {
        console.log("Mongoose Server connected Successfully")
      return mongoose
    })
}

export default dbConnect