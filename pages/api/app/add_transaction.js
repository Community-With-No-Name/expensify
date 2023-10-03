// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "@/dbConnect";
import Transaction from "@/schema/Transaction";
import jwt from "jsonwebtoken"

export default async function handler(req, res) {
  await dbConnect()
  const decode = jwt.verify(req.headers['authorization'], "secret_key")

  const {
    category,
    amount,
    date,
    description
  } = req.body;
  await Transaction.create({category, amount, date, description, userId: decode.userId})
  .then((transaction)=>{
    res.status(201).json({ data: transaction })
  })
  }
  