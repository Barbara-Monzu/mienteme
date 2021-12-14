 const { Schema, model } = require('mongoose')

const conversationSchema = new Schema({

  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],

  dateSelected: {
    type: Schema.Types.ObjectId,
    ref: 'Date',
  },
  


}, { timestamps: true })

const Conversation = model('Conversation', conversationSchema)

Conversation.syncIndexes()

module.exports = Conversation