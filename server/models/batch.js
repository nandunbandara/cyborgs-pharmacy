/**
 * Created by ishan on 4/28/17.
 */
'use strict'

const mongoose = require('mongoose');

const batchScema = new mongoose.Schema({
    'bId':Number,
    'bNumber':String,
    'drugName':String,
    'bType':String,
    'bAdded':Date,
    'bManufac':Date,
    'bExpire':Date,
    'bQuantity':Number
});

const Batch = mongoose.model('Batch',batchScema);

module.exports = Batch;