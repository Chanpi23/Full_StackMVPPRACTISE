const mongoose= require('mongoose')
const itemListSchema= new mongoose.Schema( {
    textinput: {
type:String,
required:true
    },

    numinput: {
type:Number,
required:true
    },
     date: {
        type:Date,
        
     }
})