/**
 * Created by ishan on 4/29/17.
 */
'use strict'

const request = require('../models/pRequest');

exports.getPRequests = function (req,res) {
  request.find({},function (err,data) {
      if(err){
          console.log(err);
      }
      res.json(data);
  });
};

exports.getPRequestById = function (req,res) {
    var reqId = req.body.rId;

    request.find({'rId':reqId},function (err,data) {
        if(err){
            console.log(err);
        }
        res.json(data);
    });
}