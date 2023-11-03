const express = require('express')
const productController = require('../controller/productController')
const productRouter = express.Router()

productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.createProduct)

productRouter.route('/:productId')
.get(productController.getProductById)

productRouter.route('/search/:productName')
.get(productController.searchProductByName)

productRouter.route('/edit/:productId')
.patch(productController.updateProduct)

productRouter.route('/delete/:productId')
.delete(productController.deleteProduct)

module.exports = productRouter;