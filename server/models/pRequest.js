/**
 * Created by ishan on 4/29/17.
 */
'use strict'

const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    'rId':Number,
    'name':String,
    'drugCategory':String,
    'drugPrice':Number,
    'dQtyAvailable':Number,
    'rAdded':String
});

const PRequest = mongoose.model('PRequest',requestSchema);

module.exports = PRequest;