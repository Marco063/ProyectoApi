const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaRental = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    location:{
        type:mongoose.Types.ObjectId,
        ref:'location'
    }
},{
    versionKey: false
})

module.exports=mongoose.model('rental',SchemaRental)