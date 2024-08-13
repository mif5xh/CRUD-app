const express = require('express')

const {deleteProduct, getAllProdcuts, getSingleProdcut, editProduct, addProduct} = require('../controllers/prodcutContoller.js')


const router = express.Router()


router.get('/', getAllProdcuts)


router.get('/:id', getSingleProdcut)

router.post('/', addProduct)


router.put('/edit/:id', editProduct)

router.delete('/delete/:id', deleteProduct)


module.exports = router