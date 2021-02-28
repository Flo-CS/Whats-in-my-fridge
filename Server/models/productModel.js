const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
        barcode: {type: String, required: true},
        data: {type: Object, required: true},
        quantity: {type: Number, default: 1},
        // TODO : Change this date each time product is modified
        lastDateModified: {type: Date, default: new Date()},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema, "Products");