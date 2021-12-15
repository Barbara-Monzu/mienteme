const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
// const Message = require('../models/Message.model')
const Request = require('../models/Request.model')
const User = require('../models/User.model')


router.get('/allRequestPending', (req, res) => {

  const id = req.session.currentUser._id


  Request
    .find({ $and: [{ receiver: id, tryAgain: "PENDING" }] })
    .populate(["creator", "dateSelected"])
    .then(Request => res.status(200).json(Request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})

router.get('/myRequestsCreated', (req, res) => {

  const id = req.session.currentUser._id


  Request
    .find({ creator: id })
    .populate(["receiver"])
    .then(Request => res.status(200).json(Request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})


router.get('/allSecondsOpportunities', (req, res) => {

  const id = req.session.currentUser._id


  Request
    .find({ $and: [{ creator: id, tryAgain: "YES" }] })
    .populate(["receiver", "dateSelected"])
    .then(Request => res.status(200).json(Request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})


router.post('/create/:date/', (req, res) => {
  const { date } = req.params
  const id = req.session.currentUser._id
  const { questionTrue, questionFalse } = req.body
  const idMatch = req.body._id


  Request.create({ creator: id, receiver: idMatch, questionTrue: questionTrue, questionFalse: questionFalse, dateSelected: date })
    .then((requestCreated) => res.status(200).json({ message: 'Request successfully created', requestCreated }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Request", err }))

})


router.put('/:idRequest', (req, res) => {

  const { idRequest } = req.params
  const { response } = req.body


  Request
    .findByIdAndUpdate(idRequest, { tryAgain: response }, { new: true })
    .then((secondOpportunity) => res.status(200).json({ message: 'Second Opportunity Done', secondOpportunity }))
    .catch(err => res.status(500).json({ code: 500, message: "Error modifiying request", err }))


})

router.delete('/:idRequest', (req, res) => {

  const { idRequest } = req.params


  Request
    .findByIdAndDelete(idRequest, { new: true })
    .then((removed) => res.status(200).json({ message: 'Second Opportunity Done', removed }))
    .catch(err => res.status(500).json({ code: 500, message: "Error modifiying request", err }))

})




module.exports = router