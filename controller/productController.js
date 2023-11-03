const Products = require('../model/product')

class productController {
    getAllProducts(req, res, next) {
        Products.find({}).then((products) => {
            console.log("products: ", products)
            res.json(products)
        }).catch(next)
    }

    getProductById(req, res, next) {
        const id = req.params.id
        Products.findById({_id : id}).then((product) => {
            res.json(product)
        }).catch(next)
    }

    findProductById(req, res, next) {
        const id = req.params.id
        Products.findById({_id : id}).then((product) => {
            return product
        }).catch(next)
    }

    searchProductByName(req, res, next) {
        const name = req.params.productName;
        const regex = new RegExp(name, "i");
    
        Products.find({ name: { $regex: regex } })
            .then((products) => {
                res.status(200).json(products);
            })
            .catch(next);
    }

    createProduct(req, res, next) {
        const product = new Products(req.body)
        const duplicatedCheck = this.findProductById(req, res, next)
        if(duplicatedCheck) {
            res.json({
                message : 'Product already exists'
            }).catch(next)
        }else{
            product.save().then(() => {
                res.json({
                    message : 'Product created successfully'
                })
            }).catch(next)
        }
    }

    updateProduct(req, res, next) {
        const id = req.params.id
        const existCheck = this.findProductById(req, res, next)
        if(!existCheck) {
            res.json({
                message : 'Product does not exist'
            }).catch(next)
        }else{
            Products.updateOne({_id : id}, req.body).then(() => {
                res.json({
                    message : 'Product updated successfully'
                })
            }).catch(next)
        }
    }

    deleteProduct(req, res, next) {
        const id = req.params.id
        const existCheck = this.findProductById(req, res, next)
        if(!existCheck) {
            res.json({
                message : 'Product does not exist'
            }).catch(next)
        }else{
            Products.deleteOne({_id : id}).then(() => {
                res.json({
                    message : 'Product deleted successfully'
                })
            }).catch(next)
        }
    }
}

module.exports = new productController