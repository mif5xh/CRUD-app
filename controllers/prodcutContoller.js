const Product = require("../models/productModel.js")


const getAllProdcuts =  async (req, res)=>{

  try {
    const result = await Product.find({})
    res.status(201).json({data: result})

  } catch (error) {
    console.log(error)
    res.status(400).json({message: error.message || error})
  }
  
}



const getSingleProdcut = async (req, res)=>{
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    if(!product) return res.status(401).json({message: 'No product with such ID'})
      res.status(201).json({product})
    
  } catch (error) {
    console.log(error)
    res.status(400).json({message: error.message || error})
  }
}


const addProduct = async (req, res)=>{
  try {
    const {name, quantity, price, image} = req.body
    //if(!name || !quantity || !price || !image) return res.status(401).json({message: 'All fields should be added'})
      const product = await Product.create({name, quantity, price, image})
    res.status(201).json({message: 'Created'})
    
  } catch (error) {
    console.log(error)
    res.status(400).json({message: error.message || error})
  }
}


const editProduct = async (req, res)=>{
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    if(!product) return res.status(401).json({message: 'No product with such ID'})
      const newProduct = await Product.findByIdAndUpdate(id, req.body, {new: true})
      res.status(201).json({message: 'Updated'})
  } catch (error) {
    console.log(error)
    res.status(400).json({message: error.message || error})
  }
}



const deleteProduct = async(req, res)=>{
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    if(!product) return res.status(401).json({message: 'No product with such ID'})
      await Product.findByIdAndDelete(id)
    res.status(201).json({message: 'Deleted'})
    
  } catch (error) {
    console.log(error)
    res.status(400).json({message: error.message || error})
  }
}



module.exports = {deleteProduct, getAllProdcuts, getSingleProdcut, editProduct, addProduct}