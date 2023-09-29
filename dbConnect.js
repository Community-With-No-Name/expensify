import mongoose from 'mongoose'
const ATLAS_URI = process.env.ATLAS_URI || "mongodb+srv://Musa:Jewbreel1@cluster0.ewf3o.mongodb.net/expensify?retryWrites=true&w=majority"
async function dbConnect () {
    return await mongoose.connect(ATLAS_URI).then(mongoose => {
        console.log("Mongoose Server connected Successfully")
      return mongoose
    })
}

export default dbConnect