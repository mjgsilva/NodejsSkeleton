var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

ArticleSchema.index({ title: 1 });

module.exports = mongoose.model('Article', ArticleSchema);