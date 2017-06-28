/**
 * Created by Aadil on 5/4/2017.
 */
angular.module('dprescriptionServices',[])

    .factory('dPrescription', ['$http', function($http){
        const dprescriptionFactory = [];

        dprescriptionFactory.getDocPrescription = function(){
            return $http.get('/getDocPrescription').then(function(data){
                return data;
            })
        };
        dprescriptionFactory.getDetails = function(number){
            return $http.get('/getDocPrescriptionDetail/' + number).then(function(data){
                return data;
            })
        };
        return dprescriptionFactory;
    }])