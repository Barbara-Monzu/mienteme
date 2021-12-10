const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
// const Message = require('../models/Message.model')
const Request = require('../models/Request.model')
const User = require('../models/User.model')


router.get('/allRequestPending', (req, res) => {

  const id = req.session.currentUser._id

  Request
    .find({ $and: [ { receiver: id, tryAgain: "PENDING"} ] })
    .populate(["creator", "dateSelected"])
    .then(Request => res.status(200).json(Request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})

router.get('/allSecondsOpportunities', (req, res) => {

  const id = req.session.currentUser._id

  Request
    .find({ $and: [ { creator: id, tryAgain: "YES"} ] })
    .populate(["receiver", "dateSelected"])
    .then(Request => res.status(200).json(Request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})


router.post('/create/:date/', (req, res) => {
  const { date }  = req.params
  const id = req.session.currentUser._id

 Request.create({ creator: id, receiver: date.creator, questionTrue: "Como hamburguesas" , questionFalse: "Mi peli favorita es Titanic", dateSelected: date._id})
     .then((requestCreated) => res.status(200).json({ message: 'Request successfully created', requestCreated }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Request", err }))

  // mi id va a ser current user, se eliminará de la barra 

  // const getTrivial = User.findById(idCreator)
  
    // Promise.all([getTrivial, createRequest])
    //   .then(data => res.json(data))
    //   .catch(err => res.json({ err, errMessage: "Creando request" }))

  // User.findById(idCreator)
  // .then((User) => {
  // const { questionTrue, questionFalse } = User;
  // Request
  //   .create({ creator: id, receiver: idCreatorDate, questionTrue: questionTrue , questionFalse: questionFalse, dateSelected: idDate})
  //   .then((requestCreated) => res.status(200).json({ message: 'Request successfully created', requestCreated }))
  //   .catch(err => res.status(500).json({ code: 500, message: "Error creating Request", err }))

  // res.status(200).json({ message: 'Request successfully created', requestCreated }))
  //   .catch(err => res.status(500).json({ code: 500, message: "Error creating Request", err }))

  // }

})


router.put('/answer/:idRequest', (req, res) => {

const idRequest = req.params
const answer = req.body

//response será "YES" o "NO"
 
  Request
    .findByIdAndUpdate({idRequest, tryAgain: "YES"}, { new: true })
    .then((secondOpportunity) => res.status(200).json({ message: 'Second Opportunity Done' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating message", err }))


})


// TODO router.delete('/', isLoggedIn, (req, res) => { })


module.exports = router