const express= require('express')
const orderController = require('../controller/orderController')
const orderRouter = express.Router()

orderRouter.route('/')
.get(orderController.getAllOrders)
.post(orderController.createOrder)

orderRouter.route('/:customerID')
.get(orderController.getOrderByCustomerID)

orderRouter.route('/filter/:date')
.get(orderController.getCustomerOrderByDate)

module.exports = orderRouter;