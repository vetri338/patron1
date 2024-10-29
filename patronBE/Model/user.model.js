const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    email : {type : String, required : true},
    password : {type : String, required : true},
    name : {type:String,required:true},
    contact : {type:String,required:true},
    usertype : {type:String,required : true},
    shopname : {type:String}
})

const UserModel = mongoose.model("user", userSchema)


module.exports = {
    UserModel
}