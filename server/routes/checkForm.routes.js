const router = require("express").Router()
// const { isLoggedIn } = require('../middleware')
const User = require("../models/User.model")


router.get('/', (req, res) => {

  const id = req.session.currentUser._id

  User.findById(id)
    .then(userLogged => res.json(userLogged))
    .catch(err => res.json({ err, errMessage: "Problema cheackeando la Box" }))

})


module.exports = router