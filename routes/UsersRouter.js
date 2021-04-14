var express = require('express');
var router = express.Router();
const usuarioscontroller = require('../Controller/UsuariosController');
const validarcadastro = require('../middlewares/ValidarCadastro');

router.get('/', usuarioscontroller.index);
router.post('/', validarcadastro, usuarioscontroller.create);
router.put('/:id', usuarioscontroller.update);
router.delete('/:id', usuarioscontroller.delete);

module.exports = router;
