const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const limits = require('../utils/limits');

const UserSchema = new Schema({
  username: { type: String, minLength: limits.username.min, maxLength: limits.username.max, required: true },
  password: { type: String, minLength: limits.password.min, maxLength: limits.password.max, required: true },
  first_name: { type: String, minLength: 1, required: true },
  last_name: { type: String, minLength: 1, required: true },
  last_name: { type: String },
  age: { type: Number, required: true }
});

UserSchema.pre('save', function(next) {
  if (this.isModified('password'))
    this.password = bcrypt.hashSync(this.password, 10);
  
  if (this.isModified('first_name') || this.isModified('last_name'))
    this.full_name = `${this.first_name} ${this.last_name}`;
  
  next();
});

module.exports = mongoose.model('User', UserSchema);