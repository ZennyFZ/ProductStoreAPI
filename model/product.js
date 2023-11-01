const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        require: true,
        unique: true
    },
    productImage: {
        type: String,
        require: true
    },
    productPrice: {
        type: Number,
        require: true,
        default: 0
    },
    stock: {
        type: Number,
        require: true,
        default: 0
    },
    productCategory: {
        type: String,
        require: true
    }
}, {timestamps: true})

const Products = mongoose.model("Products", productSchema)
module.exports = Products
