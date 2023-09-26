// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "@/dbConnect";
import User from "@/schema/User";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export default async function handler(req, res) {
  const key = process.env.SECRET_KEY || "secret_key";

  await dbConnect()
  const { email, password } = req.body
  await User.findOne({ email })
    .then(async (user) => {
      console.log("log")
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({
            userId: user._id,
            email: user.email,
            username: user.username
          }, key)
          res.status(201).json({ token, message: "Login successful" })
        }
      }
      else {
        res.status(401).json({
          message: "User does not exist",
        });
      }
    })
}
