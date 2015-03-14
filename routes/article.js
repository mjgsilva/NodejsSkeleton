var Article = require('../models/article');

exports.load = function(req, res) {
    Article.find({}, function(err, articles) {
        if(err) { res.json({ success: false, message: err.message }) }
        else { res.json(articles) }
    });
}

exports.create = function(req, res) {
    var article = new Article({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author
    });

    article.save(function(err) {
        if(err) { res.json({ success: false, message: err.message }) }
        else { res.json({ success: true }) }
    });
}