const mongoose = require('mongoose');
const { Schema } = mongoose;
//const normalize = require('normalize-mongoose');

const orderItemsSchema = new Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    unit_price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
})

//wishlistSchema.plugin(normalize);

var Order = mongoose.model("OrderItems", orderItemsSchema);

module.exports = Order;