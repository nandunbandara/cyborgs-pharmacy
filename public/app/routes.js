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

        .state('admin',{
            url:'/admin',
            templateUrl:'app/views/pages/admin.html',
            controller: 'adminController as admin'
        })

        .state('admin.users')

        .state('404', {
            url: '/error',
            templateUrl: 'app/views/pages/404.html'
        })
})