import {Server} from 'socket.io'

console.log("this is the socket api")

const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("test", (data) => {
        console.log(data)
    })
})

io.listen("4000")