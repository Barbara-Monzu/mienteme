const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
const Message = require('../models/Message.model')



router.get('/allMessages/:idConver', (req, res) => {

  const id = req.session.currentUser._id
  const { idConver } = req.params
  console.log("ID CONVER COGIENDO LOS MENSAJES", idConver)

  Message
    .find({ conversation: idConver })
    .populate(["sender", "receiver"])
    .then(MessagesPrivates => res.status(200).json(MessagesPrivates))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err: err.message }))
})

router.get('/lastMessage/:idConver', (req, res) => {

  const { idConver } = req.params

  Message
    .find({ conversation: idConver }).sort({ 'createdAt': -1 })
    .then(MessagesPrivates => res.status(200).json(MessagesPrivates))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})


router.post('/:idConver', (req, res) => {

  const { idConver } = req.params
  console.log("MIRANDO BODY ", req.body)
  const { message, sender, receiver } = req.body

  Message
    .create({ message, sender, receiver, conversation: idConver })
    .then(() => res.status(200).json({ message: 'Message successfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating message", err }))

})


router.delete('/:idMessage', (req, res) => {

  const { idMessage } = req.params
  const { conversation } = req.body

  Message
    .findByIdAndDelete(idMessage)
    .then(messageDelete => Conversation.findByIdAndUpdate({ _id: conversation }, { $pull: { messages: messageDelete } }, { new: true }))
    .then(() => res.status(200).json({ message: 'Message successfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating message", err }))
})


// TODO router.delete('/', (req, res) => { })


module.exports = router