import mongoose from "mongoose";

const TransactionsSchema = new mongoose.Schema({
    userId: mongoose.SchemaTypes.ObjectId,
    category: String,
    amount: String,
    date: Date,
    descripion: String,
    createdAt: Date,
    title: String
})

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionsSchema)
export default Transaction