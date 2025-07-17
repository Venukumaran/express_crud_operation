const mongoose = require("mongoose")

const contactschema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please add name"]
        },
        email:{
            type:String,
            required:[true,"please add name"]
        },
        phno:{
            type:String,
            required:[true,"please add name"]
        },
    },
        {
            timestamps:true,
        }
    
)
module.exports=mongoose.model("contact",contactschema)