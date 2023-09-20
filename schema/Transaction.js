import mongoose from "mongoose";

const TransationsSchema = new mongoose.Schema({
    userId: mongoose.SchemaTypes.ObjectId,
    category: String,
    amount: String,
    date: Date,
    descripion: String,
    createdAt: Date
})

const Transation = mongoose.models.Transation || mongoose.model("Transation", TransationsSchema)
export default Transation