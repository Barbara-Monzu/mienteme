
require("dotenv/config");
require("./db");

const express = require("express");
const app = express();


const http = require("http")
const socketio = require("socket.io")
const server = http.createServer(app)
const io = socketio(server)

const cors = require("cors")
// const path = require('path')

io.on('connect', socket => {

    socket.on("sendMessage", (message) => {
        io.emit("receiveMessages", {message} )
    

    })




//   socket.on('sendMessage', (message, callback) => {
//     const user = getUser(socket.id)
//     io.to(user.room).emit('message', { user: user.username, text: message, hasBeenRead: false })

//     callback()
//   })

  socket.on('disconnect', () => {
   io.emit("messages", {server: "Servidor", message: "ha abandonado la sala" })

})

})







require("./config")(app);
require("./config/session.config")(app)


require("./routes")(app)


require("./error-handling")(app);

module.exports = server;
