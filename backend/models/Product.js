const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
   
    productPicture: String
});
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;