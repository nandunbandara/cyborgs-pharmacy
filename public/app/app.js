'use strict';

angular.module('cyborgPharmacy', [
    'ngAnimate',
    'cyborgPharmacy.routes',

    //services
    'authServices',
    'userServices',
    'drugServices',
    'expiredBatchsServices',

    //controllers
    'userController',
    'dashboardController',
    'adminController',
    'drugController',
    'reportsController'

])

.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptors');
})


.run( ['$rootScope','$location','Auth', function($rootScope, $location, Auth) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if(toState.authenticated==true){
            if(!Auth.isLoggedIn()){
                $location.path('/login');
            }else{
                //get user data
                Auth.getUser().then(function(data){
                    if(data){
                        $rootScope.user = data;
                    }else{
                        $location.path('/login');
                    }
                })
                if(toState.permissions){
                    if($rootScope.user.data.permission != toState.permissions[0]){
                        //add more permission checks here
                        $location.path('/drugs');
                    }
                }
            }
        }else if (toState.authenticated==false){
            if(Auth.isLoggedIn()){
                $location.path('/');
            }
        }

    })
}]);