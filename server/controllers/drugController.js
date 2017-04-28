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

exports.addNewDrug = function (req,res) {

    drug.find({},function(err,data){
        var lastId=0;
        if(err){
            console.log(err);
        }

        for(var j=0;j<data.length;j++){
            lastId=data[j].dId;
        }
        lastId++;
        var newDrug = drug({
            "dId":lastId,
            "dCategory":req.body.dCategory,
            "dName":req.body.dName,
            "dPrice":req.body.dPrice,
            "dUnit":req.body.dUnit,
            "dangerLevel":req.body.dangerLevel,
            "reorderLevel":req.body.reorderLevel,
            "dQuantity":req.body.dQuantity
        });

        newDrug.save(function (err) {
            if(err){
                console.log(err);
            }
        });
    });

    res.send("success");
};