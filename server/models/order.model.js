const mongoose = require("mongoose");

// Define the schema for the order items
const orderItemSchema = new mongoose.Schema({
  mainCategory: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  skill: {
    type: [String],
    required: true,
  },
});

// Define the schema for the order
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  order: {
    type: [orderItemSchema],
    required: true,
  },
  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  approved: {
    type: Number,
    default: 0,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

// Create the model using the schema
const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
