'use strict'

const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
    "date":"Date",
    "deliveredDrugs":String
});

const usage = mongoose.model('phprescriptions',usageSchema);

module.exports = usage;