/**
 * Created by en7b33_r00t on 4/8/17.
 */
var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//controllers
var drugController = require('./server/controllers/drugController');
var userController = require('./server/controllers/userController');
var prescriptionController = require('./server/controllers/prescriptionController');
var batchController = require('./server/controllers/batchController');
var reportController = require('./server/controllers/reportsController');

//database connection
mongoose.connect('mongodb://cyborg_root:pass123$@ds149800.mlab.com:49800/pharmacy',function(){
    console.log('connection successful');
}, function(error){
    console.log(error);
});

//port for the server to listen on
var port = process.env.PORT || 6809;

app.listen(port, function(){
    console.log("Listening on port "+port);
});

//drug routes
app.post('/getDrugDetails',drugController.getDrugDetails);
app.post('/getDrugNamesByCat',drugController.getDrugNamesByCat);
app.get('/getCatList',drugController.getCatList);
app.get('/getDrugNames',drugController.getDrugNames);
app.get('/addNewDrug',drugController.addNewDrug);
app.get('/getAllDrugDetails',drugController.getAllDrugDetails);

//user routes
app.post('/users',userController.addUser);
app.post('/authenticate', userController.authenticate);
app.get('/me', userController.me);
app.get('/users', userController.users)
app.delete('/users/:username', userController.deleteUser);

//batch routes
app.post('/addBatch',batchController.addBatch);


//prescription routes
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

//reports routes
app.get('/viewAllDrugs',reportController.viewAllDrugs);
app.post('/viewDrugsByName',reportController.viewDrugbyName);
app.get('/viewAllBatches',reportController.viewAllBatches);
app.post('/viewBatchesByName',reportController.viewBatchesByName);
app.get('/viewAllExpiredBatchs',reportController.viewAllExpiredBatches);
// app.post('/viewBatchesToBeExpired',reportController.viewBatchesToBeExpired);
app.get('/viewUsage',reportController.viewUsage);


app.get('/', function(req,res){
    res.sendfile('public/app/views/index.html');
})