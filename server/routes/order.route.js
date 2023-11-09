// External Module
const express = require("express");
// Internal Module
const { orderView, orderAdd } = require("../controllers/order.controller.js");
const verifyLoginMiddleware = require("../middlewares/verifyLogin.middleware.js");

// Router Init
const orderRoute = express.Router();

// All Student Routes

// User View
orderRoute.get("/view", verifyLoginMiddleware, orderView());
orderRoute.post("/add", verifyLoginMiddleware, orderAdd());

module.exports = orderRoute;
