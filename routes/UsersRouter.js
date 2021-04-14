var express = require('express');
var router = express.Router();
const usuarioscontroller = require('../Controller/UsuariosController');

router.get('/', usuarioscontroller.index);
router.post('/', usuarioscontroller.create);
router.put('/:id', usuarioscontroller.update);
router.delete('/:id', usuarioscontroller.delete);

module.exports = router;
