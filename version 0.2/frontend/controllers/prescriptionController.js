/**
 * Created by Aadil on 5/4/2017.
 */
angular.module('prescriptionController',[])

    .controller('dprescriptionCtrl',['$scope','$location','$rootScope','dPrescription',function($scope,$location,$rootScope,dPrescription){
        const app = this;

        app.showErrorMsg = false;
        app.dprescription = [];
        app.dprescriptionByID = {};
        app.dprescriptionByDocName = {};
        app.dprescriptionByDate = {};
        app.addDpre = {};
        app.dprescriptionByPatName = {};

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


