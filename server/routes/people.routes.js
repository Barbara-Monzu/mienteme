const router = require("express").Router()
const User = require("../models/User.model")
const Date = require("../models/Date.model")

router.post("/newUser/:id", (req, res) => {
  const { id } = req.params

  const { username, 
    profileImages, 
    age, 
    bio, 
    genre,
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


router.post("/newUser/:id/newDate", (req, res) => {
  const { id } = req.params
  const { nameDate, description, picturesDate, street, number, city, category, day } = req.body

  // if (User.findOne(id).sort( dates.length === 3 )) {
  //   res.status(400).json({ code: 400, message: 'Ya tienes tres citas en tu perfil, borra alguna para poder crear una nueva' })
  //   return
  // }

  Date.create({ 
    nameDate, 
    description, 
    addressDate: {street, number, city},
    category, 
    picturesDate, 
    day,
    creator: id
  })
    .then(newDate => res.json(newDate))
    .catch(err => res.json({ err, errMessage: "Problema creando la primera cita del User" }))
})


router.get("/allUsers", (req, res) => {
  User.find().limit(200)
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

router.post("/profile/edit-date/:idDate", (req, res) => {
  const { idDate } = req.params
  const { nameDate, description, picturesDate, street, number, city, category, day } = req.body

  Date.findByIdAndUpdate( idDate, { 
    nameDate, 
    description, 
    street, 
    number, 
    city, 
    category, 
    picturesDate, 
    day
  }, {new: true} ) 
    .then(editDate => res.json(editDate))
		.catch(err => console.log(err))
   
})


router.delete("/delete/:idDate", (req, res) => {
  const { idDate } = req.params

  Date.findByIdAndDelete(idDate)
    .then(deleteDateUser => res.json(deleteDateUser))
    .catch(err => console.log(err))

})

router.delete("/delete-profile/:id", (req, res) => {
  const { id } = req.params

  User.findByIdAndDelete(id)
    .then(deleteUser => res.json({ deleteUser }))
    .catch(err => res.json({ err, errMessage: "Problema borrando User" }))
})

module.exports = router