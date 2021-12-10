const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const Date = require("../models/Date.model")


router.post("/new", (req, res) => {
    const id = req.session.currentUser._id
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

  router.post("/edit-date/:idDate", (req, res) => {
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

  router.get("/mydates/:id", (req, res) => {
    const {id} = req.params
  
    Date.find({creator: id})
      .then( Mydates => res.json(Mydates))
      .catch(err => console.log(err))
  
  })

  router.get("/its-dates/:idOtherUser", (req, res) => {

    const { idOtherUser } = req.params
  
    Date.find({creator: idOtherUser })
      .then( itsDates => res.json(itsDates))
      .catch(err => console.log(err))
  
  })
  
  
  router.delete("/delete/:idDate", (req, res) => {
    const { idDate } = req.params
  
    Date.findByIdAndDelete(idDate)
      .then(deleteDateUser => res.json(deleteDateUser))
      .catch(err => console.log(err))
  
  })


module.exports = router