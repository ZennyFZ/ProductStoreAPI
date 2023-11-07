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

    getOrderByCustomerID(req, res, next) {
        order.find({ customerID: req.params.customerID }).then((order) => {
            res.status(200).json(order);
        }).catch(next)
    }

    getCustomerOrderByDate(req, res, next) {
        order.find({ customerID: req.params.customerID, createDate: req.params.date }).then((order) => {
            res.status(200).json(order);
        }).catch(next)
    }
}

module.exports = new orderController();