import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
    //@ts-ignore
  prismaClient.users.findMany()
   //@ts-ignore
    .then(users => {
      res.json(users);
    })
     //@ts-ignore
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

app.post("/user", (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return
  }
 //@ts-ignore
  prismaClient.users.create({
    data: {
      username,
      password
    }
  })
   //@ts-ignore
    .then(user => {
      res.status(201).json(user);
    })
     //@ts-ignore
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
})

app.listen(8080);