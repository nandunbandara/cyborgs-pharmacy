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
        }).catch(function(err){
            return err;
        })
    }

    //get user by username
    userFactory.getUserByUsername = function(uname){
        return $http.get(Conf.auth_service.contact('/users/').contact(uname)).then(function(data){
            return data;
        }).catch(function(err){
            return err;
        })
    }

    //create new user
    userFactory.addUser = function(data) {
        return $http.post(Conf.auth_service.concat('/users'),data).then(function(data){
            return data;
        }).catch(function(err){
            return err;
        })
    }

    //update user
    userFactory.updateUser = function(uname,data){
        return $http.put(Conf.auth_service.concat('/users/').concat(uname),data).then(function(data){
            return data;
        }).catch(function(err){
            return data;
        })
    }

    //delete user record
    userFactory.deleteUser = function(username){
        return $http.delete(Conf.auth_service.concat('/users/').concat(username)).then(function(data){
            return data;
        }).catch(function(err){
            return err;
        })
    }

    return userFactory;
}])