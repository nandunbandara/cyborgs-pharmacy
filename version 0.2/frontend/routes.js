/**
 * Created by ntban_000 on 4/27/2017.
 */
angular.module('cyborgPharmacy.routes',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/error');
    $stateProvider

        .state('login',{
            url: '/login',
            templateUrl: 'views/pages/users/login.html',
            controller: 'loginCtrl as login',
            authenticated: false
        })

        .state('dashboard',{
            url:'/',
            templateUrl: 'views/pages/dashboard.html',
            controller: 'dashboardCtrl as dash',
            authenticated: true
        })

        .state('dashboard.drug',{
            url:'drugs',
            templateUrl:'views/pages/drugs/inventory.html',
            controller: 'drugCtrl as drug'
        })

        .state('dashboard.expiredBatchsReport',{
            url:'expiredBatchs' ,
            templateUrl:'views/pages/reports/expiredBatchs.html',
            controller:'reportsCtrl as reportsBatchs'
        })

        .state('dashboard.viewUsage',{
            url:'usages',
            templateUrl:'views/pages/reports/usage.html',
            controller:'reportsCtrl as reportsPrescription'
        })
        .state('dashboard.batches',{
            url:'batches',
            templateUrl:'views/pages/reports/batches.html',
            controller:'reportsCtrl as reportsAllBatchs'
        })

        .state('admin',{
            url:'/admin',
            templateUrl:'views/pages/admin.html',
            controller: 'adminCtrl as admin',
            authenticated: true,
            permissions: ['admin']
        })

        .state('admin.users',{
            url:'/users',
            templateUrl: 'views/pages/users/users.html',
            controller: 'admin_usersController as admin_user',
            authenticated: true,
            permissions: ['admin']
        })

        .state('admin.newUser',{
            url: '/new_user',
            templateUrl: 'views/pages/users/addUser.html',
            controller: 'admin_usersController as admin_user',
            authenticated: true,
            permissions: ['admin']
        })

        .state('admin.updateUser',{
            url:'/updateUser',
            templateUrl: 'views/pages/users/updateUser.html',
            controller: 'admin_updateUserController as admin_update_user',
            authenticated: true,
            permissions: ['admin']
        })

        .state('dashboard.dprescriptions',{
            url:'prescription/doctor',
            templateUrl:'views/pages/prescriptions/dprescription.html',
            controller: 'dprescriptionCtrl as dprescriptions'
        })

        .state('dashboard.mailSender',{
            url:'drugs/mailSender',
            templateUrl:'views/pages/drugs/requestDrug.html',
            controller: 'mailCtrl as mail'
        })

        .state('dashboard.addDrug',{
            url:'drugs/addDrug',
            templateUrl:'views/pages/drugs/addDrug.html',
            controller: 'drugCtrl as drug'
        })

        .state('dashboard.updateDrug',{
            url:'drugs/updateDrug',
            templateUrl:'views/pages/drugs/updateDrug.html',
            controller: 'drugCtrl as drug'
        })

        .state('dashboard.requestDrug',{
            url:'drugs/requestDrug',
            templateUrl:'views/pages/drugs/viewRequests.html',
            controller: 'drugCtrl as drug'
        })
        .state('dashboard.addDocPrescription',{
            url:'prescription/doctor/addDprescription',
            templateUrl:'views/pages/prescriptions/addDocPrescription.html',
            controller: 'dprescriptionCtrl as dprescriptions'
        })

        .state('dashboard.phprescriptions',{
            url:'prescription/pharmacist',
            templateUrl:'views/pages/prescriptions/phprescription.html',
            controller: 'phprescriptionCtrl as phprescriptions'
        })

        .state('dashboard.addPhPrescription',{
            url:'prescription/pharmacist/addPhprescription',
            templateUrl:'views/pages/prescriptions/addPhPrescription.html',
            controller: 'phprescriptionCtrl as phprescriptions'
        })

        .state('404', {
            url: '/error',
            templateUrl: 'views/pages/404.html'
        })
})