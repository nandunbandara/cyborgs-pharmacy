/**
 * Created by ntban_000 on 4/29/2017.
 */
angular.module('adminController',[])

.controller('adminCtrl',['Auth', function(Auth){
    const app = this;

    app.logout = function(){
        Auth.logout();
        $location.path('/login');
    }
}])