/**
 * Created by ishan on 4/27/17.
 */
'use strict'

const drug = require('./drug.model');

exports.getAllDrugDetails= function (req,res) {
    drug.find({},function (err,docs) {
        if(err){
            console.log(err);
        }
        res.json(docs);
    })
};

exports.getDrugDetails= function (req,res) {
    var id = req.params.id;
    drug.find({'dId':id},function (err,docs) {
        if(err){
            console.log(err);
        }
        res.json(docs);
    })
};

exports.getDrugNamesByCat = function (req,res) {
    var category = req.params.id;

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
        var data2 = req.body;
        data2.dId = lastId;
        var newDrug = new drug(data2)

        newDrug.save(function (err) {
            if(err){
                console.log(err);
            }
        });
    });

    res.send("success");
};