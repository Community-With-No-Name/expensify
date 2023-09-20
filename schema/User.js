import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    profile_photo: String,
    createdAt: Date
})

const User = mongoose.models.User || mongoose.model("User", UsersSchema)
export default User