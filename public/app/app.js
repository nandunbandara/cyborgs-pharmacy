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

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if(toState.authenticated==true){
            if(!Auth.isLoggedIn()){
                event.preventDefault();
                $location.path('/login');
            }else{
                //get user data
                Auth.getUser().then(function(data){
                    $rootScope.user = data;
                })
            }
        }else if (toState.authenticated==false){
            if(Auth.isLoggedIn()){
                event.preventDefault();
                $location.path('/');
            }
        }

    })
}]);