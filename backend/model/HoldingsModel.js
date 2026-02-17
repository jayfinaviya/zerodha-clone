const {module} = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingsSchema");

const HoldingsModel = new module("holding",HoldingsSchema);

module.exports = {HoldingsModel};