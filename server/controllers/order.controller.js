// Internal Import
const orderModel = require("../models/order.model.js");
const { validateOrderFields } = require("../utils/validator.js");

// User View
const orderView = () => {
  return async (req, res) => {};
};

// User Register
const orderAdd = () => {
  return async (req, res) => {
    const { order, payment } = req.body;
    const errors = await validateOrderFields(order, payment);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const userId = req.user._id;
    const newOrder = new orderModel({
      user: userId,
      order: order,
      payment: payment,
    });
    await newOrder.save();
    res.status(201).json({
      msg: "Successfully saved your order",
    });
    try {
    } catch (err) {
      res.status(500).json({
        errors: [{ msg: "Server Error" }],
      });
    }
  };
};

module.exports = {
  orderView,
  orderAdd,
};
