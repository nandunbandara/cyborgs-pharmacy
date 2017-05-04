/**
 * Created by Aadil on 5/4/2017.
 */
angular.module('prescriptionController',[])

    .controller('dprescriptionCtrl',['$scope','Auth','$location','$rootScope','dPrescription',function($scope,Auth,$location,$rootScope,dPrescription){
        const app = this;

        app.dprescription = [];
        app.someitem = {};

        dPrescription.getDocPrescription().then(function (data) {
            app.dprescription = data.data;
        });
        $scope.getDetails = function(number){
            dPrescription.getDetails(number).then(function(data){
                app.someitem = data.data;
            });
        };

    }])

    .controller('phprescriptionCtrl',['Auth','$location','$rootScope','phPrescription',function(Auth,$location,$rootScope,phPrescription){
        const app = this;

        app.phprescription = [];

        phPrescription.getPhPrescription().then(function (data) {
            app.phprescription = data.data;
        })

    }])


