import {Server} from 'socket.io'

console.log("this is the socket api")

const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
});

let onlineUser = []

const addUser = (userId, socketId) => {
    const userExists = onlineUser.find(user => user.userId === userId);
    if(!userExists) {
        onlineUser.push({userId, socketId})
    }
}

const removeUser = (socketId) => {
    onlineUser = onlineUser.filter(user => user.socketId!==socketId)
}

io.on("connection", (socket) => {
    socket.on("newUser", (userId) => {
        addUser(userId, socket.id)
    })
    socket.on("disconnect", () => {
        removeUser(socket.id)
    })
})

io.listen("4000")