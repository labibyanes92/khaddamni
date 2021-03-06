const express = require("express");
const { categoryRules, validator} = require('../middleware/validator');
const { register } = require('../controllers/category.controller');
const Category = require('../model/Category')

const Router = express.Router();

// add new category path localhost:7000/category

Router.post(`/`, categoryRules(), validator, register);

// get category path localhost:7000/category

Router.get("/", (req, res) => {
    Category.find()
      .then((category) => res.send(category))
      .catch((err) => console.log(err));
  });


module.exports = Router;