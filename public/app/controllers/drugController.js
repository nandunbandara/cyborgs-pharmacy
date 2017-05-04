/**
 * Created by ishan on 5/3/17.
 */
angular.module('drugController',[])

.controller('drugCtrl',['Auth','$location','$rootScope','Drug',function(Auth,$location,$rootScope,Drug){
    const app = this;
    app.username = $rootScope.user.data.name;
    app.logout = function(){
        Auth.logout();
        $location.path('/login');
    }

    app.drugs = [];
    app.curPage = 0;

    Drug.getAllDrugs().then(function (res) {
        app.drugs = res.data;
    })

}])

.filter('pagination', function() {

    return function(input, start) {
        start = +start;
        return input.slice(start);
    };
})

.filter('roundup', function () {
    return function (value) {
        return Math.ceil(value);
    };
})

