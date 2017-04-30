/**
 * Created by owner on 4/29/2017.
 */
'use strict'

const drug = require('../models/drug');
const batch = require('../models/batch');

//view all drugs
exports.viewAllDrugs = function(req, res){
    drug.find({})
        .exec(function(err, drugs){
            if(err){
                res.send('error has occured');
            }
            else{
                res.json(drugs);
            }
        })
};

//view drugs by name
exports.viewDrugbyName = function(req, res){
    drug.find({dName:req.body.drugName})
        .exec(function(err, drug){
            if(err){
                res.send('error has occured');
            }
            else{
                res.json(book);
            }
        })
};

//view all batches
exports.viewAllBatches = function(req, res){
    batch.find({})
        .exec(function(err, batches){
            if(err){
                res.send('error has occured');
            }
            else{
                res.json(batches);
            }
        })
};

//view batch by batchNumber
exports.viewBatchesByName = function(req, res){
    batch.find({bNumber:req.body.batchnumber})
        .exec(function(err, batches){
            if(err){
                res.send('error has occured');
            }
            else{
                res.json(batches);
            }
        })
};

//view all expired batch
exports.viewAllExpiredBatchs = function(req, res){
    var currentDate = new Date();
    batch.find({
        bExpire:{$lt:new Date(currentDate.toISOString())}
    })
        .exec(function(err, batches){
            if(err){
                res.send('error has occured');
            }
            else{
                res.json(batches);
            }
        })
};


//view all drugs to be expired
exports.viewDrugsToBeExpired = function(req, res){
    batch.find({
        bExpire:{$lt:new Date(req.body.requiredDate.toISOString())}
    })
        .exec(function(err, batches){
            if(err){
                res.send('error has occured');
            }
            else{
                res.json(batches);
            }
        })
};



