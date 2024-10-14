import express from 'express';
import dotenv from 'dotenv'
import path from "path"

import connectDb from './config/db.js';
import Product from './models/ProductModel.js';
import productRoutes from './routes/ProductRoute.js'

dotenv.config()
const app = express()
const __dirname = path.resolve()



app.use(express.json())//ALLOWS USE TO ACCEPT JSON DATA IN req.body
const port = process.env.PORT || 5000

// app.get("/", (req, res) => { //to create a route
//     res.send("Server is ready")
// })

app.use("/api/products", productRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}
app.listen(port, () => {
    connectDb()
    console.log(`Server running on port ${port}`)
})

