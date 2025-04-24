import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client"

const server = new WebSocketServer({
    port : 8081
})

server.on("connection", async(socket) => {
    //@ts-ignore
     await prismaClient.users.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    socket.send("Hii there you are connected to the server")
})