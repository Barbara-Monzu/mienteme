
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
const { addUser, removeUser, getUser, getUsersInRoom } = require('../client/src/utils/chatUsers')

io.on('connect', socket => {


    socket.on("conectado", () => {
        console.log("un user se ha conectado")

    })

    socket.on('join', ({ username, room }, callback) => {

        console.log("QUÉ ES ESTO???", username, room)

        const { error, user } = addUser({ id: socket.id, username, room })

        if (error) return callback(error)
        console.log("ESTE USER--------", user)
        // socket.emit('message', { user: 'admin', text: `${user.username}, welcome to the chat` })
        // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.username} has joined the chat` })

        socket.join(user.room)

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

        //DESPUÉS DE TODO ESTO HACE EL setInitialMessages(), que es el callback que le he pasado
        callback()
    })


    socket.on("sendMessage", (message) => {
        io.emit("receiveMessages", { message })

    })

    //   socket.on('sendMessage', (message, callback) => {
    //     const user = getUser(socket.id)
    //     io.to(user.room).emit('message', { user: user.username, message: message })

    //     callback()
    //   })

    socket.on('disconnect', () => {
        io.emit("messages", { server: "Servidor", message: "ha abandonado la sala" })

    })

})







require("./config")(app);
require("./config/session.config")(app)

app.use(express.static(path.join(__dirname, "public")))
require("./routes")(app)
app.use((req, res) => res.sendFile(__dirname + "/public/index.html"));


// require("./error-handling")(app);

module.exports = server;
