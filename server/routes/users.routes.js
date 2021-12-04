const router = require("express").Router()
const User = require("../models/User.model")
const Trivial = require("../models/Trivial.model")
const Date = require("../models/Date.model")


router.get("/allUsers", (req, res) => {
  User.find()
  .populate("dates")
    .then(allUsers => res.json(allUsers))
    .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
})

router.get("/user/:id", (req, res) => {
  const { id } = req.params

  User.findById(id)
  .populate(([ 'dates', 'trivial' ]))
    .then(theUser => res.json(theUser))
    .catch(err => res.json({ err, errMessage: "Problema buscando un User" }))
})


router.post("/newDate", (req, res) => {
  const { name, description, pictures, street, number, city, category, day, hour } = req.body

  Date.create({ 
    name, 
    description, 
    street, 
    number, 
    city, 
    category, 
    pictures, 
    day,
    hour
  })
    .then(newDate => res.json(newDate))
    .catch(err => res.json({ err, errMessage: "Problema creando User" }))
})

router.put("/edit-profile/:id", (req, res) => {

  const { id } = req.params
  const { username, password, profileImg, isTrue, isFalse} = req.body

  Trivial.findByIdAndUpdate(id, { isTrue, isFalse }, { new: true })
    .then(updatedTrivial => res.json(updatedTrivial))

  User.findByIdAndUpdate(id, { username, password, profileImg }, { new: true })
    .populate(([ 'dates', 'trivial' ]))

  .then(updatedUser => res.json(updatedUser))
    .catch(err => res.json({ err, errMessage: "Problema editando Trivial y" }))
})

router.delete("/deleteDate/:id", (req, res) => {

  const { id } = req.params

  User.findByIdAndDelete(id)
  .populate(([ 'dates', 'trivial' ]))
 
    .then(deletedUser => res.json({ deletedUser }))
    .catch(err => res.json({ err, errMessage: "Problema borrando User" }))
})

router.put("/edit-profile/edit-date/:id", (req, res) => {

  const { id } = req.params
  const { name, description, street, number, city, category, pictures, day, hour } = req.body

  Date.findByIdAndUpdate(id, { 
    name, 
    description, 
    street, 
    number, 
    city, 
    category, 
    pictures, 
    day,
    hour  }, { new: true })
    .then(updatedDate => res.json(updatedDate))
    .catch(err => res.json({ err, errMessage: "Problema editando User" }))
})

router.delete("/edit-profile/deleteDate/:id", (req, res) => {
  const { id } = req.params

  Date.findByIdAndDelete(id)
    .then(deletedDate => res.json({ deletedDate }))
    .catch(err => res.json({ err, errMessage: "Problema borrando User" }))
})

module.exports = router