/**
 * Created by ishan on 4/29/17.
 */
'use strict';

const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    'rId':{type:Number, required:true, unique:true},
    'name':{type:String, required:true},
    'drugCategory':{type:String, required:true},
    'drugPrice':{type:Number, required:true},
    'dQtyAvailable':{type:Number, required:true},
    'rAdded':{type:String, required:true}
});

const PRequest = mongoose.model('PRequest',requestSchema);

module.exports = PRequest;