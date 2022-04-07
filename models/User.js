const {Schema, mongoose} = require('mongoose')

const schema = new Schema({

    email:{type:String, required:true, unique:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
    registrationDate:{
        type:String
    },

    lastLoginDate:{
        type:String
    }
})
module.exports = User =mongoose.model('User', schema)