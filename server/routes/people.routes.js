const router = require("express").Router()
const User = require("../models/User.model")
const Date = require("../models/Date.model")

router.post("/profile/:id/edit-profile", (req, res) => {

  const { id } = req.params

  const { username, profileImages, age, bio, city, location, questionTrue, questionFalse, clue, gender, genderFilter, ageFirstFilter, ageSecondFilter, cityFilter } = req.body

  const query = { username, age, bio, city, location, questionTrue, questionFalse, clue, filter: { genderFilter, ageFilter: [ageFirstFilter, ageSecondFilter], cityFilter } };

  if (profileImages) query.profileImages = profileImages

  User.findByIdAndUpdate(id, query, { new: true })
    .then(createUserInfo => res.json(createUserInfo))
    .catch(err => res.json({ err, errMessage: "Problema creando por primera vez la info del User" }))
})


router.get("/allUsers", (req, res) => {

  const id = req.session.currentUser._id
  const { genderFilter, ageFilter, cityFilter } = req.session.currentUser.filter

  console.log("MIRANDO!!!!!", genderFilter, ageFilter[0], ageFilter[1])

  if (genderFilter === "BOTH") {

    User.find({ $and: [{ age: { $gte: ageFilter[0], $lte: ageFilter[1] } }, { city: cityFilter }] })
      .then(allUsers => res.json(allUsers))
      .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
  }

  else {
    User.find({ $and: [{ gender: genderFilter }, { age: { $gte: ageFilter[0], $lte: ageFilter[1] } }, { city: cityFilter }] })
      .then(allUsers => res.json(allUsers))
      .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
  }

  // if ((ageFilter === [null, null]) && cityFilter && genderFilter) {
  //   User.find({ $and: [{ gender: genderFilter }, { city: cityFilter }] })
  //     .then(allUsers => res.json(allUsers))
  //     .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
  // }

  // if (ageFilter && !cityFilter && genderFilter) {
  //   User.find({ $and: [{ gender: genderFilter }, [{ age: { $gte: ageFilter[0], $lte: ageFilter[1] } }]] })
  //     .then(allUsers => res.json(allUsers))
  //     .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
  // }


  // if ((ageFilter === []) && !cityFilter && genderFilter) {
  //   User.find({ gender: genderFilter })
  //     .then(allUsers => res.json(allUsers))
  //     .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
  // }

  // if ((ageFilter === []) && !cityFilter && !genderFilter) {
  //   User.find()
  //     .then(allUsers => res.json(allUsers))
  //     .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))
  // }

  // else {
  //   User.find()
  //     .then(allUsers => res.json(allUsers))
  //     .catch(err => res.json({ err, errMessage: "Problema buscando Users" }))

  // }
})



router.get("/profile/:id", (req, res) => {
  const { id } = req.params

  const userFind = User.findById(id)
  const datesFind = Date.find({ creator: id })

  Promise.all([userFind, datesFind])
    .then(infoProfile => {
      const [infoUser, datesProfile] = infoProfile;
      res.json(infoProfile)

    })
    .catch(err => res.json({ err, errMessage: "Problema encontrando el perfil" }))

}
)


router.delete("/delete-profile/:id", (req, res) => {
  const { id } = req.params

  User.findByIdAndDelete(id)
    .then(deleteUser => res.json({ deleteUser }))
    .catch(err => res.json({ err, errMessage: "Problema borrando User" }))
})

module.exports = router