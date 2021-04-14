var express = require('express');
var router = express.Router();
const postscontroller = require('../Controller/PostsController');

router.get('/', postscontroller.index);
router.post('/', postscontroller.create);
router.put('/:id', postscontroller.update);
router.delete('/:id', postscontroller.delete);
router.get('/:id', postscontroller.Show);

module.exports = router;
