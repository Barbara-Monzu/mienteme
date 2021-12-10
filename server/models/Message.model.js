const { Schema, model } = require('mongoose')

const messageSchema = new Schema({

    message: {
        type:String, 
        required: true 
  
    },

    conversation: {
        type: Schema.Types.ObjectId, ref: "Conversation"
      },

  
    sender: { 
        type: Schema.Types.ObjectId, 
        ref:'User', 
        required:true 
    },

    receiver: { 
        type: Schema.Types.ObjectId, 
        ref:'User', 
        required:true 
    },
  
    delivered: { 
        type: Date,
        required: true,
        default: Date.now 
    },
  
    read: {
        type: Boolean,
        required: true,
        default: false
    },

    deletedForMe: {
        type: Boolean,
        required: true,
        default: false
    }
  },


)

const Message = model("Message", messageSchema);

module.exports = Message;