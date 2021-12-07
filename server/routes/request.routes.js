const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
// const Message = require('../models/Message.model')
const Request = require('../models/Request.model')
const User = require('../models/User.model')


router.get('/allRequestPending', (req, res) => {

  const id = req.session.currentUser._id

  Request
    .find({ receiver: id })
    .populate(["creator", "dateSelected"])
    .then(Request => res.status(200).json(Request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})

router.get('/allSecondsOpportunities', (req, res) => {

  const id = req.session.currentUser._id

  Request
    .find({ creator: id, tryAgain: "YES"})
    .populate(["receiver", "dateSelected"])
    .then(Request => res.status(200).json(Request))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving Conversations", err }))
})


router.post('/create/:id/:idDate/:idCreator', (req, res) => {
  const {idDate, id, idCreator }  = req.params

  const createRequest = Request.create({ creator: id, receiver: idCreator, questionTrue: "Como hamburguesas" , questionFalse: "Mi peli favorita es Titanic", dateSelected: idDate})

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
 
answer ? 
  Request
    .findByIdAndUpdate({idRequest, tryAgain: "YES"}, { new: true })
    .then((secondOpportunity) => res.status(200).json({ message: 'Second Opportunity Done' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating message", err }))
    
: Request
    .findByIdAndDelete({idRequest})
    .then((secondOpportunity) => res.status(200).json({ message: 'Request delete' }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting request", err }))

})


// TODO router.delete('/', isLoggedIn, (req, res) => { })


module.exports = router