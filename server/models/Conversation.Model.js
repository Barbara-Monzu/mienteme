 const { Schema, model } = require('mongoose')

const conversationSchema = new Schema({

  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],

  date: [{
    type: Schema.Types.ObjectId,
    ref: 'Date',
  }],

  //busco Date.find(creator: idOtherUser)
  //creo conver.create(date: responseanterior)
  //en los mensajes tendré que estar yo

  //
  


}, { timestamps: true })

const Conversation = model('Chat', conversationSchema)

module.exports = Conversation