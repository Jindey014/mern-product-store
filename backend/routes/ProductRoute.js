import express from 'express'
import Product from '../models/ProductModel.js'
import mongoose from 'mongoose'
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/ProductController.js'

const router = express.Router()

//GET ALL PRODUCTS
router.get("/", getProducts)

//ADD PRODUCT
router.post("/", addProduct)

//DELETE PRODUCT
router.delete("/:id", deleteProduct)

//UPDATE THE PRODUCT
router.put("/:id", updateProduct)

//GET ONE PRODUCT
router.get("/:id", getProduct)

export default router