const Product = require('../models/ProductModel');


// Create Product
exports.createProduct = async (req, res) => {
        const product = await Product.create(req.body);
        res.status(201).json(product);
};

//  Get All
exports.getProducts = async (req, res) => {
        const products = await Product.find();
        res.json(products);
};
      
//  Get one  Product
exports.getProduct = async (req, res) => {
        if (!
                product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.json( product);
    };
// Update Product
exports.updateProduct = async (req, res) => {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{ new: true, });
        res.json( product);
            }
// Delete Product
exports.deleteProduct = async (req, res) => {
        await Product.findByIdAndDelete(req.params.id);
        res.json({message: "Product deleted"});
        }
