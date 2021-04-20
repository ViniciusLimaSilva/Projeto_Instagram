var express = require('express');
const postscontroller = require('../Controller/PostsController');
var router = express.Router();

/* GET home page. */
router.get('/', postscontroller.index);

module.exports = router;
