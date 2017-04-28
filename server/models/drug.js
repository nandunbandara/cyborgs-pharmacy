/**
 * Created by ishan on 4/27/17.
 */
'use strict'

const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
    "dId":Number,
    "dCategory":String,
    "dName":String,
    "dPrice":Number,
    "dUnit":String,
    "dangerLevel":Number,
    "reorderLevel":Number,
    "dQuantity":Number
});

const Drug = mongoose.model('Drug',drugSchema);

module.exports = Drug;


