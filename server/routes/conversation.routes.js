const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
const Message = require('../models/Message.model')
const Request = require('../models/Request.model')


router.get('/', (req, res) => {

  const id = req.session.currentUser._id

  Conversation
    .find({ id: { $in: members } })
    .then(conversations => res.status(200).json(conversations))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})


router.post('/if-exist/:idDate', (req, res) => {

  const { idDate } = req.params
  const { idOtherUser } = req.body

  Request
    .findOne({ dateSelected: idDate })
    .then((request) => console.log("verifying if exist request", request))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

})


router.post('/create/:idDate', (req, res) => {
  const id = req.session.currentUser._id
  const { idDate } = req.params
  const { idOtherUser } = req.body


  Conversation
    .create({ date: idDate, members: [id, idOtherUser] })
    .then((converCreated) => console.log("creando convers", converCreated))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

})

router.get('/private/:idOtherUser', (req, res) => {
  const { id } = req.body
  const { idOtherUser } = req.params


  Conversation
    .findOne({
      $in: {
        $and: [
          { 'members': id },
          { 'members': idOtherUser }
        ]
      }
    })
    .populate("dateSelected")
    .then((response) => console.log("TRAYENDO ÚNICA CONVER ", response))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

})

module.exports = router