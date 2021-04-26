const bcrypt = require('bcryptjs');
const { Usuario, sequelize } = require('../models/');

const usuarioscontroller = {
  index: async (req, res) => {
    let usuarios = await Usuario.findAll();

    return res.render('usuarios', { listaUsuarios: usuarios });
  },

  login: (req, res) => {
    return res.render('login');
  },

  auth: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where: { email },
    });

    if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      req.session.usuariologado = usuario; //criando atributo usuarioLogado na session
      return res.redirect('/'); // redirecionando para pagina inicial
    } else {
      return res.redirect('/usuarios/login');
    }
  },

  registro: (req, res) => {
    return res.render('registro');
  },

  create: async (req, res) => {
    let { nome, email, senha } = req.body;

    const senhaCrypt = bcrypt.hashSync(senha, 10);

    let newuser = await Usuario.create({
      nome,
      email,
      senha: senhaCrypt,
    });

    return res.redirect('/usuarios/login');
  },

  update: async (req, res) => {
    let { id } = req.params;
    let { nome, email, senha } = req.body;

    let userchange = await Usuario.update(
      {
        nome,
        email,
        senha,
      },
      {
        where: { id },
      }
    );
    return res.send(userchange);
  },

  delete: async (req, res) => {
    let { id } = req.params;

    let DeleteUser = await Usuario.destroy({
      where: { id },
    });
    return res.json(DeleteUser);
  },
};

module.exports = usuarioscontroller;
