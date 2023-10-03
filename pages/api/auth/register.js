// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "@/dbConnect";
import User from "@/schema/User";
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
  await dbConnect()
  const {email, password, username} = req.body
  await User.findOne({email})
  .then(async (user)=>{
    if(user){
      res.status(409).json({
        user,
        message: "User already exists"
      })
    }
    else {
const hash = await bcrypt.hash(password, 10)
      await User.create({email, password:hash, username})
      .then((newUser)=>{
        res.status(200).json({
          user: newUser,
          message: "User created successfully"
        })
      })
    }
  })
}
