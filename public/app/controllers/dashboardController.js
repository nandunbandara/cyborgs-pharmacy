/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('dashboardController',[])

.controller('dashboardCtrl',['Auth','$location','$rootScope',function(Auth,$location,$rootScope){
    const app = this;
    app.username = $rootScope.user.data.name;
    app.logout = function(){
        Auth.logout();
        $location.path('/login');
    }
}])