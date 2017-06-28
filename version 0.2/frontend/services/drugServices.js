/**
 * Created by ishan on 5/3/17.
 */

angular.module('drugServices',[])

.factory('Drug',['$http','Conf',function ($http,Conf) {
    const drugFactory = [];

    drugFactory.getAllDrugs = function () {
        return $http.get(Conf.drug_service.concat('/drug')).then(function (data) {
            return data;
        })
    }
    return drugFactory;
}])