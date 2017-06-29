/**
 * Created by owner on 5/4/2017.
 */

angular.module('reportsServices',[])

    .factory('Reports',['$http','Conf',function ($http,Conf) {
        const ReportsFactory = [];

        //get all expired batches
        ReportsFactory.getAllExpiredBatchs = function () {
            return $http.get(Conf.report_service.concat('/reports/ExpiredBatchs')).then(function (data) {
                return data;
            })
        }

        //get all  batches
        ReportsFactory.getAllBatchs = function () {
            return $http.get(Conf.report_service.concat('/reports/Batches')).then(function (data) {
                return data;
            })
        }
        //get all prescriptions
        ReportsFactory.getAllPrescription = function(){
            return $http.get(Conf.report_service.concat('/reports/viewUsage')).then(function (data) {
                return data;
            })
        }

        return ReportsFactory;
    }])


