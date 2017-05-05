/**
 * Created by owner on 5/4/2017.
 */
angular.module('reportsController',[])


.controller('reportsExpiredCtrl',['Batchs',function(Batchs){
    const app = this;
    app.batchs = [];

    Batchs.getAllBatchs().then(function (res){
        app.batchs = res.data;
    });
}])