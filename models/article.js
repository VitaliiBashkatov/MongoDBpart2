const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Types;

const ArticlesSchema = new Schema({
  title: {type : String, minlength: 5, maxlength: 400, index: true, required: true},
  subtitle: {type: String, minlength: 5},
  description: {type: String, minlength: 5, maxlength: 5000, required: true },
  owner: {type: Types.ObjectId, ref: 'User', required: true},
  category: {type: String, enum: ['sport','games','history']},
  createdAt: {type: Date, default: Date.now(), required: true},
  updatedAt: {type: Date, default: Date.now(), required: true}
});

module.exports = mongoose.model('Article', ArticlesSchema);


