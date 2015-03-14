var express = require('express')
    , http = require('http')
    , bodyParser = require('body-parser')
    , dbModel = require('./models/db')
    , articleController = require('./routes/article');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = express.Router();

router.route('/')
    .get(articleController.load)
    .post(articleController.create);

app.use('/api', router);
http.createServer(app).listen(3545);