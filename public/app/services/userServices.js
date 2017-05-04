/**
 * Created by ntban_000 on 5/3/2017.
 */

angular.module('userServices',[])

.factory('User', ['$http', function($http){
    const userFactory = [];

    userFactory.getUsers = function(){
        return $http.get('/users').then(function(data){
            return data;
        })
    }

    userFactory.addUser = function(data) {
        return $http.post('/users',data).then(function(data){
            return data;
        })
    }
    return userFactory;
}])