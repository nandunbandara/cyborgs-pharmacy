/**
 * Created by owner on 5/4/2017.
 */

angular.module('expiredBatchsServices',[])

    .factory('Batchs',['$http',function ($http) {
        const batchsFactory = [];

        batchsFactory.getAllBatchs = function () {
            return $http.get('/viewAllExpiredBatchs').then(function (data) {
                return data;
            })
        }
        return batchsFactory;
    }])