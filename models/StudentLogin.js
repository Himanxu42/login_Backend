
const mongoose = require('mongoose') ; 
const validator=require('validator'); 
const StudenSchema = new mongoose.Schema({
    email:{
            type:String,
                    required:true,
                    unique:[true,"email id already present"],
                    validate(value){
                        if(!validator.isEmail(value)){
                            throw new Error("Invalid Email")
        
                        }
                    }
                },
                password : {
                    type: String ,
                    required : true ,
                    trim : true
                },
                username:{
                    type:String,
                   
                    minlength:4,
                    maxlength:10,
                    required:true,
                    unique:true
        
        
                },
                fullname:{
                    
                    minlength:4,
                    maxlength:10,
                    type:String,
                    required:true
                }
        
}) 

module.exports = mongoose.model('StudentLogin',StudenSchema)
