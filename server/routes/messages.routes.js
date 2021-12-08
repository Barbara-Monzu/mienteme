const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
const Message = require('../models/Message.model')



router.get('/allMessages', (req, res) => {

  const id = req.session.currentUser._id

  const idOtherUser = req.body

  Date 
    .find({
        $and: [{
                creator: id
            },
            {
                match: idOtherUser
            },
        ],
        $or: {
            $and: [{
                    creator: idOtherUser
                },
                {
                    match: id
                },
            ],
    }})
    .populate(["creator", "match"])
    .then(Messages => res.status(200).json(Messages))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})


router.put('/createMessage', (req, res) => {

  const id = req.session.currentUser._id
  const { message, conversation } = req.body

  Message
    .create({ message: text, sender: id})
    .then(message => Conversation.findByIdAndUpdate({ _id: conversation }, { $push: { messages: message } }, { new: true }))
    .then(() => res.status(200).json({ message: 'Message successfully created' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating message", err }))

})


router.put('/delete-message/:idMessage', (req, res) => {

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