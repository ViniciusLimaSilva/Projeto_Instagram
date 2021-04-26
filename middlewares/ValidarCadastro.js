const { Usuario, sequelize } = require('../models');

module.exports = async (req, res, next) => {
  let { email, senha, nome } = req.body;

  if (email === null || senha === null || nome === null) {
    res.status(400).json({ erro: 'Todos os campos devem ser preenchidos ' });
  } else {
    let users = await Usuario.findAll({ where: { email } });
    if (users.length) {
      res.status(400).json({ erro: 'Email já cadastrado ' });
      return;
    } else {
      if (senha.length < 6 || senha.length > 20) {
        res.status(400).json({
          erro: 'Senha deve conter no mínimo 6 dígitos e no máximo 12 ',
        });
      } else {
        next();
      }
    }
  }
};
