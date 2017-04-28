/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('authServices',[])

.factory('Auth', function($http){
    const authFactory = {};

    authFactory.login = function(loginData){
        return $http.post('/authenticate', loginData);
    }

    return authFactory;
});
