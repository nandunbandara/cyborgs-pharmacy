'use strict';

angular.module('cyborgPharmacy', [
    'ngAnimate',
    'cyborgPharmacy.routes',
    'authServices',
    'userController',
    'dashboardController',
    'adminController',
    'admin.usersController'
])

.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptors');
})


.run( ['$rootScope','$location','Auth', function($rootScope, $location, Auth) {
    $rootScope.$watch(function() {
            return $location.path();
        },
        function(a){
            if(!Auth.isLoggedIn()){
                $location.path('/login');
            }else{
                //get user data
                Auth.getUser().then(function(data){
                    $rootScope.user = data;
                })
            }
        });
}]);