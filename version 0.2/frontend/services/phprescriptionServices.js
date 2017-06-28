/**
 * Created by Aadil on 5/4/2017.
 */
angular.module('phprescriptionServices',[])

    .factory('phPrescription', ['$http', function($http){
        const phprescriptionFactory = [];

        phprescriptionFactory.getPhPrescription = function(){
            return $http.get(Conf.prescription_service.concat('/phprescriptions')).then(function(data){
                return data;
            })
        }
        return phprescriptionFactory;
    }])