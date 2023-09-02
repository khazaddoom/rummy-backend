import express from 'express'
import * as bodyParser from 'body-parser'
import { routes } from './routes'
const app = express()

app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({}))

app.use('/', routes);

app.listen(3000, () => {
    console.log("Server Listening on Port 3000 ...")
})