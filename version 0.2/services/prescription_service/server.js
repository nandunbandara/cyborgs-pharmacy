/**
 * Created by Aadil on 6/28/2017.
 */
var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//allow cross origin resource sharing
app.use(cors());

//controller
var prescriptionController = require('./prescription.controller');

//database connection
mongoose.connect('mongodb://cyborg_root:pass123$@ds149800.mlab.com:49800/pharmacy',function(){
    console.log('connection successful');
}, function(error){
    console.log(error);
});

//port for the server to listen on
var port = process.env.PORT || 9003;

app.listen(port, function(){
    console.log("Listening on port "+port);
});

//user routes
app.post('/addPHprescription',prescriptionController.addPHprescription);
app.post('/addDprescription',prescriptionController.addDprescription);
app.post('/getDPrescriptionDetails',prescriptionController.getDPrescriptionDetails);
app.post('/getPhPrescriptionDetails',prescriptionController.getPhPrescriptionDetails);
app.post('/getDprescriptionByDocName',prescriptionController.getDprescriptionByDocName);
app.post('/getDprescriptionByPatientName',prescriptionController.getDprescriptionByPatientName);
app.post('/getDprescriptionByDate',prescriptionController.getDprescriptionByDate);
app.post('/getPhprescriptionByDate',prescriptionController.getPhprescriptionByDate);
app.post('/getPhprescriptionByDocName',prescriptionController.getPhprescriptionByDocName);
app.post('/getPhprescriptionByPatientName',prescriptionController.getPhprescriptionByPatientName);
app.post('/getPhprescriptionByPharmacistName',prescriptionController.getPhprescriptionByPharmacistName);
app.get('/getDocPrescription',prescriptionController.getDocPrescription);
app.get('/getPhPrescription',prescriptionController.getPhPrescription);
app.get('/getDocPrescriptionDetail/:number',prescriptionController.getDocPrescriptionDetail);