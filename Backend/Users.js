const mongoose = require('mongoose')

const UserShema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
const UseraModel = mongoose.model("users",UserShema)
module.exports = UserModel