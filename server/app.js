
require("dotenv/config");
require("./db");
const path = require("path")
const express = require("express");
const app = express();


const http = require("http")
const server = http.createServer(app)
const socketio = require("socket.io")
const io = socketio(server)

// const io = socket(server, {
//     cors: {
//       // origin: "http://localhost:3000",
//       origin: "https://mienteme.herokuapp.com/",
//     },
//   });

const cors = require("cors")
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/chatUsers')

io.on('connect', socket => {

    socket.on('join', ({ username, room }, callback) => {

        const { error, user } = addUser({ id: socket.id, username, room })
        if (error) return callback(error)
 
        socket.join(user.room)
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
        callback()
    })


    socket.on("sendMessage", (message) => {
        io.emit("receiveMessages", { message })

    })

    socket.on('disconnect', () => {
        io.emit("messages", { server: "Servidor", message: "ha abandonado la sala" })

    })

})


require("./config")(app);
require("./config/session.config")(app)

app.use(express.static(path.join(__dirname, "public")))

require("./routes")(app)
app.use((req, res) => res.sendFile(__dirname + "/public/index.html"));



module.exports = server;
