const express = require('express');
const app = express();
const path = require('path');

const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const ACTIONS = require('../src/Actions');
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('build'));

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})

app.use(cors());

const userSocketMap={}
function getAllConnectedClients(roomID){
    return Array.from(io.sockets.adapter.rooms.get(roomID) || []).map(
        (socketId)=>{
            return {
                socketId,
                username:userSocketMap[socketId],
            }
        }
    )
}
// connecting the clients 
io.on('connection', (socket) => {

  socket.on(ACTIONS.JOIN,({roomID,username})=>{
    userSocketMap[socket.id]=username;
    socket.join(roomID);
    console.log(username) 
    const clients=getAllConnectedClients(roomID);
    clients.forEach(({socketId})=>{
        io.to(socketId).emit(ACTIONS.JOINED,{
            clients,
            username,
            socketId:socket.id,
        })
    })
  })

  socket.on(ACTIONS.CODE_CHANGE,({roomID,code})=>{
    socket.in(roomID).emit(ACTIONS.CODE_CHANGE,{code})    
 })
 
 socket.on(ACTIONS.SYNC_CODE, ({ socketId, code })=> {
    io.to(socketId).emit(ACTIONS.CODE_CHANGE, {code });
});



 socket.on('disconnecting', () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
        socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
            socketId: socket.id,
            username: userSocketMap[socket.id],
        });
    });
    delete userSocketMap[socket.id];
    socket.leave();
});
});

// Code change




// Disconnecting the user
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`port is connected ${PORT}`));