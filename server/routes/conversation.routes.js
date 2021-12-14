const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Conversation = require('../models/Conversation.model')
const Message = require('../models/Message.model')
const Request = require('../models/Request.model')


router.get('/', (req, res) => {

  const id = req.session.currentUser._id
  console.log("MIRANDO MI ID EN BACK", id)

  Conversation
    .find({ $match: { members: id } })
    .populate(["members", "dateSelected"])
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
  console.log("MIRA ESTO 11 23 ---------", idOtherUser, req.body, req.body.idOtherUser)

  Conversation
    .create({ dateSelected: idDate, members: [id, idOtherUser] })
    .then((converCreated) => console.log("creando convers", converCreated))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

})

// router.get('/private/:idOtherUser', (req, res) => {

//   // const { id } = req.body
//   const { idOtherUser } = req.params


//   Conversation
//     .findOne({
//       $in: {
//         $and: [
//           { 'members': id },
//           { 'members': idOtherUser }
//         ]
//       }
//     })
//     .populate("dateSelected members")
//     .then((response) => console.log("TRAYENDO ÚNICA CONVER ", response))
//     .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

// })

router.get('/private/:idDate', (req, res) => {
  const { idDate } = req.params
  const id = req.session.currentUser._id

  Conversation
    .findOne({
        $and: [
          { $match: { 'members': id } },
          { 'dateSelected': idDate }
        ]
      }
   )
    .then((response) => console.log("TRAYENDO ÚNICA CONVER ", response))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating Conversation", err }))

})


router.delete("/:idConver", (req, res) => {
  const { idConver } = req.params
  console.log("MARCUSSSS", req.params)

  Conversation.findByIdAndDelete(idConver)
    .then(deleteConver => res.json({ deleteConver }))
    .catch(err => res.json({ err, errMessage: "Problema borrando Conver" }))
})

module.exports = router


module.exports = router