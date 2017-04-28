/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('dashboardController',[])

.controller('dashboardCtrl',['Auth','$location',function(Auth,$location){
    const app = this;

    if(!Auth.isLoggedIn()){
        $location.path('/login');
    }

    app.logout = function(){
        Auth.logout();
        $location.path('/login');
    }
}])