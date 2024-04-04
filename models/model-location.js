const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaLocation = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    capasity:{
        type: Number,
        required:true
    }
},{
    versionKey: false
})

module.exports=mongoose.model('location',SchemaLocation)