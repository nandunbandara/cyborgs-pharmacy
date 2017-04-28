/**
 * Created by ishan on 4/27/17.
 */
'use strict'

const drug = require('../models/drug');

exports.getDrugDetails= function (req,res) {
    var id = req.body.dId;
    drug.find({'dId':id},function (err,docs) {
        if(err){
            console.log(err);
        }
        res.json(docs);
    })
};

exports.getDrugNamesByCat = function (req,res) {
    var category = req.body.dCategory;
    drug.find({'dCategory':category},function (err,data) {
        if(err){
            console.log(err);
        }
        var obj = [];
        for (var i=0;i<data.length;i++){
            obj[i]={'dId':data[i].dId,'dName':data[i].dName};
        }

        res.json(obj);
    })
};

exports.getCatList = function (req,res) {
    drug.find({}).distinct('dCategory',function (err,data) {
        if(err){
            console.log(err);
        }
        res.json(data);
    });

};

exports.getDrugNames = function (req,res) {
    drug.find({}).distinct('dName',function (err,names) {
        if(err){
            console.log(err);
        }
        res.json(names);
    });
};