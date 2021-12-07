const router = require("express").Router()
const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
const Message = require('../models/Message.model')


router.get('/', isLoggedIn, (req, res) => {

  const id = req.session.currentUser._id

  Conversation
    .find({ members: id })
    .populate('messages')
    .then(Conversations => res.status(200).json(Conversations))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})


router.post('/:idDate/create', isLoggedIn, (req, res) => {

  const id = req.session.currentUser._id
  const { otherUserId } = req.body

  Conversation
    .create()
    .then(() => res.status(200).json({ message: 'Conversation successfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

})


router.put('/', isLoggedIn, (req, res) => {

  const { message, Conversation } = req.body

  Message
    .create(message)
    .then(message => Conversation.findByIdAndUpdate({ _id: Conversation }, { $push: { messages: message } }, { new: true }))
    .then(() => res.status(200).json({ message: 'Message successfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating message", err }))

})


// TODO router.delete('/', isLoggedIn, (req, res) => { })


module.exports = router