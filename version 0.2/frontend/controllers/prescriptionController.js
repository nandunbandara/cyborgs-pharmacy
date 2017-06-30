/**
 * Created by Aadil on 5/4/2017.
 */
angular.module('prescriptionController',[])

    .controller('dprescriptionCtrl',['$scope','$location','$rootScope','dPrescription', 'Drug',function($scope,$location,$rootScope,dPrescription, Drug){
        const app = this;

        app.showErrorMsg = false;
        app.successMessage = null;
        app.dprescription = [];
        app.dprescriptionByID = {};
        app.dprescriptionByDocName = {};
        app.dprescriptionByDate = {};
        app.addDpre = {};
        app.dprescriptionByPatName = {};
        app.availableDrugs = {};
        app.addAvailableDrug = [];

        Drug.getAllDrugs().then(function (data) {
                app.availableDrugs = data.data;
            })

        // model.availableDrugs = addAvailableDrug
        $scope.addToList = function(){
                var dDrug = {
                    name: $scope.temp.add,
                    qty: $scope.temp.qty
                };
                app.addAvailableDrug.push(dDrug);
        };

        dPrescription.getDocPrescription().then(function (data) {
            app.dprescription = data.data;
        });
        $scope.getDPrescriptionDetails = function(number){
            dPrescription.getDPrescriptionDetails(number).then(function(data){
                app.dprescriptionByID = data.data;
            });
        };
        $scope.getDprescriptionByDocName = function(name){
            dPrescription.getDprescriptionByDocName(name).then(function(data){
                app.dprescriptionByDocName = data.data;
            });
        };
        $scope.getDprescriptionByPatientName = function(name){
            dPrescription.getDprescriptionByPatientName(name).then(function(data){
                app.dprescriptionByPatName = data.data;
            });
        };
        $scope.getDprescriptionByDate = function(date){
            dPrescription.getDprescriptionByDate(date).then(function(data){
                app.dprescriptionByDate = data.data;
            });
        };
        app.addDprescription = function(addDpre){
            app.showErrorMsg = false;
            dPrescription.addDprescription(addDpre).then(function(data){

                app.successMessage = "Prescription added successfully !";
                console.log(data);
            })
        };

    }])

    .controller('phprescriptionCtrl',['$location','$rootScope','phPrescription',function($location,$rootScope,phPrescription){
        const app = this;

        app.phprescription = [];
        app.dprescriptionByID = {};
        app.phprescriptionByDate = {};
        app.phprescriptionByDocName = {};
        app.phprescriptionByPatName = {};
        app.phprescriptionByPharName = {};
        app.addPHpre = {};
        app.showErrorMsg = false;

        phPrescription.getPhPrescription().then(function (data) {
            app.phprescription = data.data;
        });
        $scope.getPhPrescriptionDetails = function(number){
            phPrescription.getPhPrescriptionDetails(number).then(function(data){
                app.dprescriptionByID = data.data;
            });
        };
        $scope.getPhprescriptionByDate = function(date){
            phPrescription.getPhprescriptionByDate(date).then(function(data){
                app.phprescriptionByDate = data.data;
            });
        };
        $scope.getPhprescriptionByDocName = function(name){
            phPrescription.getPhprescriptionByDocName(name).then(function(data){
                app.phprescriptionByDocName = data.data;
            });
        };
        $scope.getPhprescriptionByPatientName = function(name){
            phPrescription.getPhprescriptionByPatientName(name).then(function(data){
                app.phprescriptionByPatName = data.data;
            });
        };
        $scope.getPhprescriptionByPharmacistName = function(name){
            phPrescription.getPhprescriptionByPharmacistName(name).then(function(data){
                app.phprescriptionByPharName = data.data;
            });
        };
        app.addPHprescription = function(addPHpre){
            app.showErrorMsg = false;
            phPrescription.addPHprescription(addPHpre).then(function(data){
                console.log(data);
            })
        };

    }])


