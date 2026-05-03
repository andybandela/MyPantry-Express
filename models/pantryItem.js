const mongoose = require('mongoose');
const user = require('./user');

const pantryItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient', required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
}, { timestamps: true });
module.exports = mongoose.model('PantryItem', pantryItemSchema);