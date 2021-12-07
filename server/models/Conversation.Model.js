 const { Schema, model } = require('mongoose')

const conversationSchema = new Schema({

  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],

  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],

  date: [{
    type: Schema.Types.ObjectId,
    ref: 'Date',
  }],


}, { timestamps: true })

const Conversation = model('Chat', conversationSchema)

module.exports = Conversation