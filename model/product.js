const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true,
        default: 0
    },
    description: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true,
        default: true
    },
    capacity: {
        type: Number,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    }
}, {timestamps: true})

const Products = mongoose.model("Perfume", productSchema)
module.exports = Products
