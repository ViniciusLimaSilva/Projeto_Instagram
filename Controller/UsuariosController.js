const { Usuario, sequelize } = require('../models/');

const usuarioscontroller = {
  index: async (req, res) => {
    let usuarios = await Usuario.findAll();

    return res.json(usuarios);
  },

  create: async (req, res) => {
    let { nome, email, senha } = req.body;

    let newuser = await Usuario.create({
      nome,
      email,
      senha,
    });
    return res.json(newuser);
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
    return res.json(userchange);
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
