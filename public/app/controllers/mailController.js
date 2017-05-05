/**
 * Created by ishan on 5/4/17.
 */

angular.module('mailController',[])

.controller('mailCtrl',['$state','$stateParams',function ($state,$stateParams) {
    const app = this;

    app.state = $state;
    app.drugId = $stateParams.dId;

    console.log(app.drugId);
}])