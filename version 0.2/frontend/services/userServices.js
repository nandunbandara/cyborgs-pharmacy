/**
 * Created by ntban_000 on 5/3/2017.
 */

angular.module('userServices',[])

.factory('User', ['$http', 'Conf', function($http, Conf){
    const userFactory = [];

    //get all users
    userFactory.getUsers = function(){
        return $http.get(Conf.auth_service.concat('/users')).then(function(data){
            return data;
        })
    }

    //create new user
    userFactory.addUser = function(data) {
        return $http.post(Conf.auth_service.concat('/users'),data).then(function(data){
            return data;
        })
    }

    //delete user record
    userFactory.deleteUser = function(username){
        return $http.delete(Conf.auth_service.concat('/users/').concat(username)).then(function(data){
            return data;
        })
    }

    return userFactory;
}])