const order = require('../model/order');

class orderController {

    getAllOrders(req, res, next) {
        order.find({}).then((orders) => {
            res.status(200).json(orders);
        }).catch(next)
    }

    createOrder(req, res, next) {
        let newOrder = new order(req.body);
        newOrder.save().then((order) => {
            res.status(200).json(order);
        }).catch(next)
    }

    getOrderById(req, res, next) {
        order.findById(req.params.orderId).then((order) => {
            res.status(200).json(order);
        }).catch(next)
    }

    getOrderByDate(req, res, next) {
        order.find({ date: req.params.date }).then((order) => {
            res.status(200).json(order);
        }).catch(next)
    }
}

module.exports = new orderController();