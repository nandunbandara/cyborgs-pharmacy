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
            controller: 'loginCtrl as login',
            authenticated: false
        })

        .state('dashboard',{
            url:'/',
            templateUrl: 'app/views/pages/dashboard.html',
            controller: 'dashboardCtrl as dash',
            authenticated: true
        })

        .state('dashboard.drug',{
            url:'drugs',
            templateUrl:'app/views/pages/drugs/inventory.html',
            controller: 'drugCtrl as drug'
        })



        .state('dashboard.expiredBatchsReport',{
            url:'expiredBatchs' ,
            templateUrl:'app/views/pages/reports/expiredBatchs.html',
            controller:'reportsExpiredCtrl as reportsBatchs'
        })

        .state('admin',{
            url:'/admin',
            templateUrl:'app/views/pages/admin.html',
            controller: 'adminCtrl as admin',
            authenticated: true,
            permissions: ['admin']
        })

        .state('admin.users',{
            url:'/users',
            templateUrl: 'app/views/pages/users/users.html',
            controller: 'admin_usersController as admin_user',
            authenticated: true,
            permissions: ['admin']
        })

        .state('admin.newUser',{
            url: '/new_user',
            templateUrl: 'app/views/pages/users/addUser.html',
            controller: 'admin_usersController as admin_user',
            authenticated: true,
            permissions: ['admin']
        })

        .state('dashboard.dprescriptions',{
            url:'dprescriptions',
            templateUrl:'app/views/pages/prescriptions/dprescription.html',
            controller: 'dprescriptionCtrl as dprescriptions'
        })

        .state('dashboard.mailSender',{
            url:'drugs/mailSender',
            templateUrl:'app/views/pages/drugs/requestDrug.html',
            controller: 'mailCtrl as mail'
        })

        .state('404', {
            url: '/error',
            templateUrl: 'app/views/pages/404.html'
        })
})