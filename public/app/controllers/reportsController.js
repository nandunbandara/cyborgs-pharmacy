/**
 * Created by owner on 5/4/2017.
 */
angular.module('reportsController',[])

<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 2a385595d888e93a994f411ad75d072b379486ff
>>>>>>> 19882bd805b2427bf4f69cf8bbd3e6233118718d

.controller('reportsExpiredCtrl',['Batchs',function(Batchs){
    const app = this;
    app.batchs = [];

    Batchs.getAllBatchs().then(function (res){
        app.batchs = res.data;
    });
}])