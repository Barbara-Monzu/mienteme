const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Date = require("../models/Date.model")


router.post("/new/:id", (req, res) => {
  const {id } = req.params
  console.log("OJOOOOOOOOOOOOO", id, req.session.currentUser)
  const { nameDate, description, city, category, day } = req.body


  Date.create({
    nameDate,
    description,
    city,
    category,
    day,
    creator: id
  })
    .then(newDate => res.json(newDate))
    .catch(err => res.json({ err, errMessage: "Problema creando la primera cita del User" }))
})

router.get("/", (req, res) => {


  Date.find()
    .populate("creator")
    .then(allDates => {
      console.log(allDates)
      res.json(allDates)
    })
    .catch(err => console.log(err))

})

router.post("/edit-date/:idDate", (req, res) => {
  const { idDate } = req.params
  const { nameDate, description, picturesDate, street, number, city, category, day } = req.body

  Date.findByIdAndUpdate(idDate, {
    nameDate,
    description,
    addressDate: {
      street,
      number,
      city
    },
    category,
    picturesDate,
    day
  }, { new: true })
    .then(editDate => res.json(editDate))
    .catch(err => console.log(err))

})

router.get("/mydates/:id", (req, res) => {
  const { id } = req.params

  Date.find({ creator: id })
    .then(Mydates => res.json(Mydates))
    .catch(err => console.log(err))

})

router.get("/its-dates/:idOtherUser", (req, res) => {

  const { idOtherUser } = req.params

  Date.find({ creator: idOtherUser })
    .then(itsDates => res.json(itsDates))
    .catch(err => console.log(err))

})

router.get("/byday-dates", (req, res) => {

  const { day } = req.body

  Date.find({ day: day })
    .then(gastronomyDates => res.json(gastronomyDates))
    .catch(err => console.log(err))

})


router.get("/categoria/:category", (req, res) => {

  const { category } = req.params

  Date.find({ category: category })
  .populate("creator")
    .then(dates => res.json(dates))
    .catch(err => console.log(err))

})


router.delete("/delete/:idDate", (req, res) => {
  const { idDate } = req.params

  Date.findByIdAndDelete(idDate)
    .then(deleteDateUser => res.json("borrando CITA" ,deleteDateUser))
    .catch(err => console.log(err))

})


module.exports = router