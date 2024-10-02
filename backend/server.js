import express from 'express';
import dotenv from 'dotenv'
import connectDb from './config/db.js';

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res) => { //to create a route
    res.send("Server is ready")
})


app.listen(port, () => {
    connectDb()
    console.log(`Server running on port ${port}`)
})
