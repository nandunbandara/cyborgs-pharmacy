/**
 * Created by ishan on 4/28/17.
 */
'use strict'

const batch = require('./batch.model');

exports.addBatch = function (req,res) {
    batch.find({},function (err,data) {
        var lastId = 0;
        if(err){
            console.log(err);
        }
        for(var j=0;j<data.length;j++){
            lastId=data[j].bId;
        }
        lastId++;

        var newBatch = batch({
            'bId':lastId,
            'bNumber':req.body.bNumber,
            'drugName':req.body.drugName,
            'bType':req.body.bType,
            'bAdded':new Date(),
            'bManufac':new Date(req.body.bManufac),
            'bExpire':new Date(req.body.bExpire),
            'bQuantity':req.body.bQuantity
        });

        newBatch.save(function (err) {
            if(err){
                var msg = {
                    "message":"error"
                }
                res.send(msg);
                return;
            }
            var msg = {
                "message":"success"
            }
            res.send(msg);
        });
    });


};