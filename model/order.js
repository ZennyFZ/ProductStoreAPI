const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerID: {
        type: String,
        require: true
    },
    customerName: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    products: {
        type: Array,
        require: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    paymentMethod: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Order', orderSchema);