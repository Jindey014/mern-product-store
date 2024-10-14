import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.log("Error in fetching the products", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export const addProduct = async (req, res) => {
    const product = req.body // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(200).json({ success: true, data: newProduct })
    } catch (error) {
        console.log("Error in creating a new product", error.message)
        res.status(500).json({ success: false, message: "Server Error" }) //status(500) because 500 is external server error
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Sucessfully deleted the product" })
    } catch (error) {
        console.log("Error in deleting the product:", error.message)
        res.status(500).json({ sucess: false, message: "Server Error" })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const product = req.body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({ success: true, data: updatedProduct, message: "Product Updated Sucessfully" })
    } catch (error) {
        console.log("Error in updating ", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export const getProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        res.status(200).json({ success: true, data: product })
    } catch (error) {
        console.log("Error in fetching the product", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}
