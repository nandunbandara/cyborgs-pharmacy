/**
 * Created by owner on 5/4/2017.
 */

angular.module('reportsServices',[])

    .factory('Reports',['$http','Conf',function ($http,Conf) {
        const ReportsFactory = [];

        //get all  batches
        ReportsFactory.getAllBatchs = function () {
            return $http.get(Conf.report_service.concat('/reports/Batches')).then(function (data) {
                return data;
            })
        }
        //get all prescriptions
        ReportsFactory.getAllPrescription = function(){
            return $http.get(Conf.report_service.concat('/reports/Usage')).then(function (data) {
                return data;
            })
        }

        ReportsFactory.getToBeExpiredBatches = function (date) {

            return $http.post(Conf.report_service.concat('/reports/toBeExpired'),date).then(function (res) {
                return res;
            })
        }

        return ReportsFactory;
    }])


