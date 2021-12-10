const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
const Message = require('../models/Message.model')
const Request = require('../models/Request.model')



router.post('/if-exist/:idDate', (req, res) => {

  const { idDate } = req.params
  const { idOtherUser } = req.body

  Request.findOne({ dateSelected: idDate })
    .then((request) => console.log("verifying if exist request", request))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

})


  router.post('/create/:idDate', (req, res) => {
    const id = req.session.currentUser._id
    const { idDate } = req.params
    const { idOtherUser } = req.body


    Conversation.create({ date: idDate, member: [id, idOtherUser] })
      .then((converCreated) => res.status(200).json({ message: 'Conversation successfully created' }, converCreated))
      .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

  })


  router.get('/all', (req, res) => {

    const id = req.session.currentUser._id

    Conversation
      .find({ id: { $in: members } })
      .then(conversations => res.status(200).json(conversations))
      .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
  })




  module.exports = router