const { Schema, model } = require("mongoose");

const messageSchema = mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId, 
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
{
    timestamps: true
});

const Message = model("Message", messageSchema);

module.exports = Message;