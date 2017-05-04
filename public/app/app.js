'use strict';

angular.module('cyborgPharmacy', [
    'ngAnimate',
    'cyborgPharmacy.routes',

    //services
    'authServices',
    'userServices',

    //controllers
    'userController',
    'dashboardController',
    'adminController',

])

.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptors');
})


.run( ['$rootScope','$location','Auth', function($rootScope, $location, Auth) {
    // $rootScope.$watch(function() {
    //         return $location.path();
    //     },
    //     function(a){
    //         if(!Auth.isLoggedIn()){
    //             $location.path('/login');
    //         }else{
    //             //get user data
    //             Auth.getUser().then(function(data){
    //                 $rootScope.user = data;
    //             })
    //         }
    // });

    $rootScope.$on('$routeChangeStart', function(event, next, current){
        console.log("route changed")
        if(!Auth.isLoggedIn()){
            $location.path('/login');
        }else{
            //get user data
            Auth.getUser().then(function(data){
                $rootScope.user = data;
            })
        }
    })
}]);