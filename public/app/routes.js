/**
 * Created by ntban_000 on 4/27/2017.
 */
angular.module('cyborgPharmacy.routes',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/error');
    $stateProvider

        .state('login',{
            url: '/login',
            templateUrl: 'app/views/pages/users/login.html',
            controller: 'loginCtrl as login'
        })

        .state('dashboard',{
            url:'/',
            templateUrl: 'app/views/pages/dashboard.html',
            controller: 'dashboardCtrl as dash'
        })

        .state('dashboard.addUser',{
            url:'/addUser',
            templateUrl: 'app/views/pages/users/addUser.html',
            controller: function($scope){
                $scope.message = "add user test";
            }
        })

        .state('404', {
            url: '/error',
            templateUrl: 'app/views/pages/404.html'
        })
})