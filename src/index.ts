import express, { Request, Response } from 'express'
import * as bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({}))

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome")
})

app.post("/", (req: Request, res: Response) => {
    res.send({...req.body})
})

app.listen(3000, () => {
    console.log("Server Listening on Port 3000 ...")
})