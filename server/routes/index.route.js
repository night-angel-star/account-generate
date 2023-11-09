const express = require("express");

// Internal Module - Import other routes
const userRoute = require("./auth.route");
const orderRoute = require("./order.route.js");

// Router Initialization
const masterRoute = express.Router();

// Mounting the sub-routes
masterRoute.use("/auth", userRoute);
masterRoute.use("/order", orderRoute);

module.exports = masterRoute;
