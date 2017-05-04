/**
 * Created by Aadil on 4/29/2017.
 */
'use strict'

const dPrescription = require('../models/dprescription');
const phPrescription = require('../models/phprescription');
const webtoken = require('jsonwebtoken');



exports.addPHprescription = function(req,res){
    const phPrescriptions = new phPrescription();
    phPrescriptions.phpId = req.body.phpId;
    phPrescriptions.dName = req.body.dName;
    phPrescriptions.pName = req.body.pName;
    phPrescriptions.pAge = req.body.pAge;
    phPrescriptions.date = req.body.date;
    phPrescriptions.availableDrugs  = req.body.availableDrugs;
    phPrescriptions.unavailableDrugs  = req.body.unavailableDrugs;
    phPrescriptions.save(function(err){
        if(req.body.phpId==null){
            res.json({ success:false, message:'Pharmacy Prescription ID is not set'});
        }else if (req.body.dName==null || req.body.dName=="") {
            res.json({success: false, message: 'Doctor Name is not set'});
        }else if (req.body.phName==null || req.body.phName==""){
            res.json({ success:false, message: 'Pharmacist Name is not set'});
        }else if (req.body.pName==null || req.body.pName==""){
            res.json({ success:false, message: 'Patient Name is not set'});
        }else if (req.body.pAge==null){
            res.json({ success:false, message:'Patient Age is not set'});
        }else if(req.body.date==null) {
            res.json({success: false, message: 'Date is not set'});
        }else if(req.body.deliveredDrugs==null) {
            res.json({success: false, message: 'Delivered Drugs are not set'});
        }else if(req.body.undeliveredDrugs==null) {
            res.json({success: false, message: 'UnDelivered Drugs are not set'});
        }else{

            res.json({ success:true, message: 'Pharmacy Prescription Added!'});
        }
    });
}
exports.addDprescription = function(req,res){
    const dPrescriptions = new dPrescription();
    dPrescriptions.dpId = req.body.dpId;
    dPrescriptions.dName = req.body.dName;
    dPrescriptions.pName = req.body.pName;
    dPrescriptions.pAge = req.body.pAge;
    dPrescriptions.date = req.body.date;
    dPrescriptions.availableDrugs  = req.body.availableDrugs;
    dPrescriptions.unavailableDrugs  = req.body.unavailableDrugs;
    dPrescriptions.save(function(err){
        if(req.body.dpId==null){
            res.json({ success:false, message:'Doctor Prescription ID is not set'});
        }else if (req.body.dName==null || req.body.dName==""){
            res.json({ success:false, message: 'Doctor Name is not set'});
        }else if (req.body.pName==null || req.body.pName==""){
            res.json({ success:false, message: 'Patient Name is not set'});
        }else if (req.body.pAge==null){
            res.json({ success:false, message:'Patient Age is not set'});
        }else if(req.body.date==null) {
            res.json({success: false, message: 'Date is not set'});
        }else if(req.body.availableDrugs==null) {
            res.json({success: false, message: 'Available Drugs are not set'});
        }else if(req.body.unavailableDrugs==null) {
            res.json({success: false, message: 'Unavailable Drugs are not set'});
        }else{

                res.json({ success:true, message: 'Doctor Prescription Added!'});
        }
    });
}

exports.getDPrescriptionDetails= function (req,res) {
    var id = req.body.dpId;
    dPrescription.find({'dpId':id},function (err,docs) {
        if(err){
            console.log(err);
        }
        res.json(docs);
    })
};

exports.getPhPrescriptionDetails= function (req,res) {
    var id = req.body.phpId;
    phPrescription.find({'phpId':id},function (err,docs) {
        if(err){
            console.log(err);
        }
        res.json(docs);
    })
};

exports.getDprescriptionByDocName = function (req,res) {
    var docName = req.body.dName;
    dPrescription.find({'dName':docName},function (err,data) {
        if(err){
            console.log(err);
        }
        var obj = [];
        for (var i=0;i<data.length;i++){
            obj[i]={dpId:data[i].dpId,pName:data[i].pName,pAge:data[i].pAge,date:data[i].date,availableDrugs:data[i].availableDrugs,unavailableDrugs:data[i].unavailableDrugs};
        }

        res.json(obj);
    })
};

exports.getDprescriptionByPatientName = function (req,res) {
    var patName = req.body.pName;
    dPrescription.find({'pName':patName},function (err,data) {
        if(err){
            console.log(err);
        }
        var obj = [];
        for (var i=0;i<data.length;i++){
            obj[i]={dpId:data[i].dpId,dName:data[i].dName,pAge:data[i].pAge,date:data[i].date,availableDrugs:data[i].availableDrugs,unavailableDrugs:data[i].unavailableDrugs};
        }

        res.json(obj);
    })
};

exports.getDprescriptionByDate = function (req,res) {
    var date = req.body.date;
    dPrescription.find({'date':date},function (err,data) {
        if(err){
            console.log(err);
        }
        var obj = [];
        for (var i=0;i<data.length;i++){
            obj[i]={dpId:data[i].dpId,dName:data[i].dName,pName:data[i].pName,pAge:data[i].pAge,availableDrugs:data[i].availableDrugs,unavailableDrugs:data[i].unavailableDrugs};
        }

        res.json(obj);
    })
};

exports.getPhprescriptionByDate = function (req,res) {
    var date = req.body.date;
    phPrescription.find({'date':date},function (err,data) {
        if(err){
            console.log(err);
        }
        var obj = [];
        for (var i=0;i<data.length;i++){
            obj[i]={phpId:data[i].phpId,dName:data[i].dName,phName:data[i].phName,pName:data[i].pName,pAge:data[i].pAge,deliveredDrugs:data[i].deliveredDrugs,undeliveredDrugs:data[i].undeliveredDrugs};
        }

        res.json(obj);
    })
};

exports.getPhprescriptionByDocName = function (req,res) {
    var docName = req.body.dName;
    phPrescription.find({'dName':docName},function (err,data) {
        if(err){
            console.log(err);
        }
        var obj = [];
        for (var i=0;i<data.length;i++){
            obj[i]={dpId:data[i].dpId,phName:data[i].phName,pName:data[i].pName,pAge:data[i].pAge,date:data[i].date, deliveredDrugs:data[i].deliveredDrugs,undeliveredDrugs:data[i].undeliveredDrugs};
        }

        res.json(obj);
    })
};

exports.getPhprescriptionByPatientName = function (req,res) {
    var patName = req.body.pName;
    phPrescription.find({'pName':patName},function (err,data) {
        if(err){
            console.log(err);
        }
        var obj = [];
        for (var i=0;i<data.length;i++){
            obj[i]={dpId:data[i].dpId,dName:data[i].dName,phName:data[i].phName,pAge:data[i].pAge,date:data[i].date, deliveredDrugs:data[i].deliveredDrugs,undeliveredDrugs:data[i].undeliveredDrugs};
        }

        res.json(obj);
    })
};

exports.getPhprescriptionByPharmacistName = function (req,res) {
    var pharmaName = req.body.phName;
    phPrescription.find({'phName':pharmaName},function (err,data) {
        if(err){
            console.log(err);
        }
        var obj = [];
        for (var i=0;i<data.length;i++){
            obj[i]={dpId:data[i].dpId,dName:data[i].dName,pName:data[i].pName,pAge:data[i].pAge,date:data[i].date, deliveredDrugs:data[i].deliveredDrugs,undeliveredDrugs:data[i].undeliveredDrugs};
        }

        res.json(obj);
    })
};

exports.getDocPrescription= function (req,res) {
    dPrescription.find({},function (err,docs) {
        if(err){
            console.log(err);
        }
        res.json(docs);
    })
};


exports.getPhPrescription= function (req,res) {
    phPrescription.find({},function (err,docs) {
        if(err){
            console.log(err);
        }
        res.json(docs);
    })
};

exports.getDocPrescriptionDetail= function (req,res) {
    var id = req.params.number;
    dPrescription.findOne({ 'dpId': id },function (err,docs) {
        if(err){
            console.log(err);
        }
        res.json(docs);
    })
};