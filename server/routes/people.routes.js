const router = require("express").Router()
const User = require("../models/User.model")
const Date = require("../models/Date.model")

router.post("/newUser/:id", (req, res) => {
  const { id } = req.params

  const {  username, profileImages, age, bio, genre, city, location, questionTrue, questionFalse, clue } = req.body
  
  User.findByIdAndUpdate(id, { username, profileImages, genre, age, bio, city, location, questionTrue, questionFalse, clue }, { new: true })
    .then(createUserInfo => res.json(createUserInfo))
    .catch(err => res.json({ err, errMessage: "Problema creando por primera vez la info del User" }))
})

router.post("/new", (req, res) => {

  const {  username, profileImages, age, bio, genre, city, questionTrue, questionFalse, clue } = req.body
  
  User.create({ username, profileImages, genre, age, bio, city, questionTrue, questionFalse, clue })
    .then(createUserInfo => res.json(createUserInfo))
    .catch(err => res.json({ err, errMessage: "Problema creando por primera vez la info del User" }))
})

// router.post("/user/newDate", (req, res) => {
//   const { nameDate, description } = req.body


//   Date.create({ 
//     nameDate, 
//     description, 
 
//   })
//     .then(newDate => res.json(newDate))
//     .catch(err => res.json({ err, errMessage: "Problema creando la primera cita del User" }))
// })



router.get("/allUsers", (req, res) => {

  // const id = req.session.currentUser._id
  // const filterGenre = req.body.filter.genre
  // const filterAgeSince = req.body.filter.age[0]
  // const filterAgeTo = req.body.filter.age[1]


  //   if( filterGenre === "WOMEN") 

  User.find()
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