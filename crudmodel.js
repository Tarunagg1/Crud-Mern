const mongoose = require('mongoose')

const crudschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
    },
    website:{
        type:String,
    }
})


let modal = mongoose.model('crud',crudschema)

module.exports = modal;


