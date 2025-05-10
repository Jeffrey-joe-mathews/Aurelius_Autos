import {Server} from 'socket.io'

console.log("this is the socket api")

const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
});

let onlineUser = []

const addUser = (userId, socketId) => {
    const userExists = onlineUser.find((user) => user.userId === userId);
    if(!userExists) {
        onlineUser.push({userId, socketId})
    }
}

const removeUser = (socketId) => {
    onlineUser = onlineUser.filter((user) => user.socketId!==socketId)
}

const getUser = (userId) => {
    return onlineUser.find((user) => user.userId === userId)
}

io.on("connection", (socket) => {
    socket.on("newUser", (userId) => {
        addUser(userId, socket.id)
    })

    socket.on("sendMessage", ({recieverId, data}) => {
        console.log(onlineUser)
        const reciever = getUser(recieverId)
        console.log("data"+data)
        console.log("reciever"+ reciever)
        io.to(reciever.socketId).emit("getMessage", data)
    })

    socket.on("disconnect", () => {
        removeUser(socket.id)
    })
})

io.listen("4000")