const order = require('../model/order');
const Products = require('../model/product');

class orderController {

    getAllOrders(req, res, next) {
        order.find({}).then((orders) => {
            res.status(200).json(orders);
        }).catch(next)
    }

    createOrder(req, res, next) {
        let newOrder = new order(req.body);
        newOrder.products.forEach((product) => {
            Products.findOne({ name: product.productName }).then((productdb) => {
                if(productdb.quantity < product.quantity) {
                    res.status(200).json({
                        message: 'Not enough product'
                    })
                }else{
                    productdb.quantity -= product.quantity;
                    productdb.save();
                }
            }).catch(next)
        });
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