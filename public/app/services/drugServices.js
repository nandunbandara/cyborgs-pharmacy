/**
 * Created by ishan on 5/3/17.
 */

angular.module('drugServices',[])

.factory('Drug',['$http',function ($http) {
    const drugFactory = [];

    drugFactory.getAllDrugs = function () {
        return $http.get('/drug').then(function (data) {
            return data;
        })
    }
    return drugFactory;
}])