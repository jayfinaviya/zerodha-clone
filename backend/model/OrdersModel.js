const {module} = require("mongoose");

const {OrdersSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new module("order",OrdersSchema);

module.exports = { OrdersModel };