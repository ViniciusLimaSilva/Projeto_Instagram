const { response } = require('express');
const { Post, sequelize } = require('../models/');

const postscontroller = {
  index: async (req, res) => {
    let posts = await Post.findAll();

    return res.render('index', { listaPosts: posts });
  },

  create: async (req, res) => {
    let { texto, img, usuarios_id, n_likes } = req.body;

    let newpost = await Post.create({
      texto,
      img,
      usuarios_id,
      n_likes,
    });
    return res.json(newpost);
  },

  update: async (req, res) => {
    let { id } = req.params;
    let { texto, img, n_likes } = req.body;

    let postchange = await Post.update(
      {
        texto,
        img,
        n_likes,
      },
      {
        where: { id },
      }
    );
    return res.json(postchange);
  },

  delete: async (req, res) => {
    let { id } = req.params;

    let Deletepost = await Post.destroy({
      where: { id },
    });
    return res.json(Deletepost);
  },

  Show: async (req, res) => {
    let { id } = req.params;

    let posts = await Post.findAll({ where: { usuarios_id: id } });

    return res.json(posts);
  },
};

module.exports = postscontroller;
