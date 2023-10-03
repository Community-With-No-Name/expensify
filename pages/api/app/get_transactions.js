// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/dbConnect"
import Transaction from "@/schema/Transaction"
import jwt from "jsonwebtoken"

export default async function handler(req, res) {
  await dbConnect()
  const decode = jwt.verify(req.headers['authorization'], "secret_key")
  await Transaction.find({userId: decode.userId})
  .then(transactions=>{
    res.status(200).json({ data: transactions })
  })
  }
  