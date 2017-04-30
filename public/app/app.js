'use strict';

angular.module('cyborgPharmacy', [
    'ngAnimate',
    'cyborgPharmacy.routes',
    'authServices',
    'userController',
    'dashboardController',
    'adminController'
])

.run( ['$rootScope','$location','Auth', function($rootScope, $location, Auth) {
    $rootScope.$watch(function() {
            return $location.path();
        },
        function(a){
            if(!Auth.isLoggedIn()){
                $location.path('/login');
                //get user data
                // Auth.getUser().then(function(data){
                //     console.log(data);
                // })
            }
        });
}]);