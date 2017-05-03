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
            controller: 'adminCtrl as admin'
        })

        .state('admin.users',{
            url:'/users',
            templateUrl: 'app/views/pages/users/users.html',
            controller: 'admin_usersController as admin_user'
        })

        .state('admin.newUser',{
            url: '/new_user',
            templateUrl: 'app/views/pages/users/addUser.html',
            controller: 'admin_userController as admin_user'
        })



        .state('404', {
            url: '/error',
            templateUrl: 'app/views/pages/404.html'
        })
})