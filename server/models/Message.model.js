const { Schema, model } = require('mongoose')

const messageSchema = new Schema({

    message:{
        text: { 
            type:String, 
            required: true 
        },
  
        image: {
            type: String
        }
  
    },
  
    sender: { 
        type: Schema.Types.ObjectId, 
        ref:'User', 
        required:true 
    },
  
    delivered: { 
        type: Date,
        required: true,
        default: Date.now() 
    },
  
    read: {
        type: Boolean,
        required: true,
        default: false
    },
  },

)

const Message = model("Message", messageSchema);

module.exports = Message;