const {module} = require("mongoose");

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PositionsModel = new module("position", PositionsSchema);

module.exports = { PositionsModel };