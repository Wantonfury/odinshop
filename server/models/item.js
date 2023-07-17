const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const limits = require('../utils/limits');

const ItemSchema = new Schema({
  name: { type: String, minLength: limits.item.name.min, maxLength: limits.item.name.max, required: true },
  description: { type: String, minLength: limits.item.description.min, maxLength: limits.item.description.max, required: true },
  images: [{ type: String, required: true }],
  price: { type: Number, minValue: 0, default: 0.0 },
  discount: { type: Number, minValue: 0, default: 0.0 },
  stock: { type: Number, minValue: 0, default: 0 }
});

module.exports = mongoose.model('Item', ItemSchema);