const router = require("express").Router()
const User = require("../models/User.model")
const Trivial = require("../models/Trivial.model")
const Date = require("../models/Date.model")

router.post("/newUser", (req, res) => {
  const { username, 
    profileImages, 
    age, 
    bio, 
    city, 
    location,
    questionTrue,
    questionFalse,
    clue } = req.body
  
  User.findByIdAndUpdate(id,  { 
    username, 
    profileImages, 
    genre,
    age, 
    bio, 
    city, 
    location,
    questionTrue,
    questionFalse,
    clue
  }, { new: true })
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


router.post("/user/:id/newDate", (req, res) => {
  const { id } = req.params
  const { nameDate, description, picturesDate, street, number, city, category, day, } = req.body

  if (User.findOne(id).sort( dates.length === 3 )) {
    res.status(400).json({ code: 400, message: 'Ya tienes tres citas en tu perfil, borra alguna para poder crear una nueva' })
    return
  }

  Date.create({ 
    nameDate, 
    description, 
    street, 
    number, 
    city, 
    category, 
    picturesDate, 
    day,
  })
    .then(newDate => res.json(newDate),
      User.findByIdAndUpdate(user._id, { $pull: { dates: newDate } }, { new: true })
		    .then(user => {
			    console.log("error actualizando la primera cita en el perfil del usuario", user)
		      })
		    .catch(err => {
			  console.log(err)
		}))
    .catch(err => res.json({ err, errMessage: "Problema creando la primera cita del User" }))
})


router.get("/allUsers", (req, res) => {
  User.find().limit(200)
  .populate("dates")
    .then(allUsers => res.json(allUsers))
    .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
})


router.get("/allWomen", (req, res) => {
  User.find({ genre: { $in: ['WOMAN', "I DON NOT IDENTIFY WITH ANY GENDER"] }}).limit(200)
    .then(allWomen => res.json(allWomen))
    .catch(err => res.json({ err, errMessage: "Problema buscando a todas las Mujeres y lxs no identificados en ningún género" }))
})


router.get("/allMen", (req, res) => {
  User.find({ genre: { $in: ['MEN', "I DON NOT IDENTIFY WITH ANY GENDER"] }}).limit(200)
    .then(allMens => res.json(allMens))
    .catch(err => res.json({ err, errMessage: "Problema buscando a todos los Hombres y lxs no identificados en ningún género" }))
})

router.get("/user/:id", (req, res) => {
  const { id } = req.params

  User.findById(id)
  .populate('dates')
    .then(theUser => res.json(theUser))
    .catch(err => res.json({ err, errMessage: "Problema buscando al User en el perfil del User" }))
})


router.put("/user/:id/edit-profile", (req, res) => {
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

router.put("/user/:id/edit-profile/:idDate/edit", (req, res) => {
  const { id } = req.params
  const { idDate } = req.params

  const { nameDate, description, picturesDate, street, number, city, category, day, } = req.body

  Date.findByIdAndUpdate( idDate, { 
    nameDate, 
    description, 
    street, 
    number, 
    city, 
    category, 
    picturesDate, 
    day,
  })
    .then(newDate => res.json(newDate),
      User.findByIdAndUpdate(id, { $pull: { dates: newDate } }, { new: true })
		    .then(userUpdate => {
			    console.log("error actualizando una cita en el perfil del usuario", user)
		      })
		    .catch(err => {
			  console.log(err)
		}))
    .catch(err => res.json({ err, errMessage: "Problema creando la primera cita del User" }))
})


router.delete("/edit-info-profile/:id/delete/:idDate", (req, res) => {
  const { id } = req.params
  const { idDate } = req.params

  Date.findByIdAndDelete(idDate)
  .then(newDate => res.json(newDate),
  User.findOneAndDelete(id, { $sort: { dates: idDate } }, { new: true })
    .then(deleteDateUser => {
      console.log("error eliminando una cita en el perfil del usuario", deleteDateUser)
      })
    .catch(err => {
    console.log(err)
}))
.catch(err => res.json({ err, errMessage: "Problema creando la primera cita del User" }))
})


router.delete("/edit-profile/delete-profile/:id", (req, res) => {
  const { id } = req.params

  User.findByIdAndDelete(id)
    .then(deleteUser => res.json({ deleteUser }))
    .catch(err => res.json({ err, errMessage: "Problema borrando User" }))
})

module.exports = router