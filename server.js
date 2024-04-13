import express from "express";
import * as dotenv from 'dotenv'
import { usersRouter, studentsRouter } from './routes/index.js'
import connect from './database/database.js';

dotenv.config()
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

//routers
app.use('/users', usersRouter)
app.use('/students', studentsRouter)

app.get('/', (req, res) => {
    res.send('respone from root router')
})

app.listen(port, async () => {
    await connect()
    console.log(`listening on port: ${port}`);
})
