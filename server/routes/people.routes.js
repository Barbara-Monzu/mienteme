const router = require("express").Router()
const User = require("../models/User.model")
const Date = require("../models/Date.model")

router.post("/profile/:id/edit-profile", (req, res) => {

  const { id } = req.params

  const {  username, profileImages, age, bio, city, location, questionTrue, questionFalse, clue, gender, genderFilter, ageFirstFilter, ageSecondFilter } = req.body
  
  User.findByIdAndUpdate(id, { username, profileImages, genre, age, bio, city, location, questionTrue, questionFalse, clue, filter: { genderFilter, ageFilter: [ageFirstFilter, ageSecondFilter]} }, { new: true })
    .then(createUserInfo => res.json(createUserInfo))
    .catch(err => res.json({ err, errMessage: "Problema creando por primera vez la info del User" }))
})


router.get("/allUsers", (req, res) => {

  const id = req.session.currentUser._id
  const { genderFilter, ageFilter  } = req.session.currentUser.filter

  User.find({ $and: [{ gender : genderFilter } , { age : { $gte : ageFilter[0] , $lte : ageFilter[1]} } ] } )
    .then(allUsers => res.json(allUsers))
    .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
})

router.get("/allWomen", (req, res) => {

  const id = req.session.currentUser._id

  User.find( { $and: [ { gender: "WOMEN" }, { gender: 'I DON NOT IDENTIFY WITH ANY GENDER'}] } )
    .then(allUsers => res.json(allUsers))
    .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
})

router.get("/allMen", (req, res) => {

  const id = req.session.currentUser._id

  User.find( { $and: [ { gender: "WOMEN" }, { gender: 'I DON NOT IDENTIFY WITH ANY GENDER'}] } )
    .then(allUsers => res.json(allUsers))
    .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
})


router.get("/profile/:id", (req, res) => {
  const { id } = req.params

  const userFind = User.findById(id)
  const datesFind = Date.find({creator: id})

  Promise.all([userFind, datesFind])
    .then(infoProfile => {
      const [infoUser, datesProfile] = infoProfile;
      res.json(infoProfile)

    })
      .catch(err => res.json({ err, errMessage: "Problema encontrando el perfil" }))

  }
)


router.post("/profile/:id/edit-profile", (req, res) => {
  const { id } = req.params

  const { username, 
    profileImages, 
    age, 
    bio, 
    city, 
    location,
    questionTrue,
    questionFalse,
    clue } = req.body

  User.findByIdAndUpdate(id, { username, 
    profileImages, 
    age, 
    bio, 
    city, 
    location,
    questionTrue,
    questionFalse,
    clue }, { new: true })

  .then(updatedUser => res.json(updatedUser))
    .catch(err => res.json({ err, errMessage: "Problema editando al Usuario en el perfil del Usuario" }))
})



router.delete("/delete-profile/:id", (req, res) => {
  const { id } = req.params

  User.findByIdAndDelete(id)
    .then(deleteUser => res.json({ deleteUser }))
    .catch(err => res.json({ err, errMessage: "Problema borrando User" }))
})

module.exports = router