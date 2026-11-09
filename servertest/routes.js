const express = require("express");
const route = express. Router();
const controller = require("./appController");

route.get("/", controller.homePage)
route. get("/about", controller.aboutPage)

module.exports = route;