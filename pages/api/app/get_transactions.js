// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/dbConnect"
import Transaction from "@/schema/Transaction"
import jwt from "jsonwebtoken"

export default async function handler(req, res) {
  await dbConnect()
console.log("line 9 reached", req.headers['authorization'])
  const decode = jwt.verify(req.headers['authorization'], "secret_key")
console.log("line 11 reached", decode)

  await Transaction.find({userId: decode.userId})
  .then(transactions=>{
console.log("line 15 reached")

    res.status(200).json({ data: transactions })
  })
  }
  