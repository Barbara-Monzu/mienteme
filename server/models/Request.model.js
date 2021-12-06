const { Schema, model } = require("mongoose")

const requestSchema = new Schema({

  creator: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },

  receiver: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },

  day: {
    type: Date,
    default: Date.now
  },

  questionTrue: {
    text: {
      type: String, 
    },

    type: {
      type: Boolean, 
      default: true,
    }
  },

  questionFalse: {
    text: {

      type:String, 
    },
    
    type: {
      type: Boolean, 
      default: false,
    }
  },

    dateSelected: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Date'
    },

    guessed: {
      type: Boolean,
      default: false,
    },

    tryAgain: {
      type: String,
      enum: ['PENDING', 'YES', 'NO'],
      default: 'PENDING',
      required: true
    },



}, { timestamps: true })

const Request = model("Request", requestSchema)

module.exports = Request
