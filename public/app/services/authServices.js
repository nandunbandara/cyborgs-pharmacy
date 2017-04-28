/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('authServices',[])

.factory('Auth', function($http,AuthToken){
    const authFactory = {};

    //authenticate user
    authFactory.login = function(loginData){
        return $http.post('/authenticate', loginData).then(function(data){
            AuthToken.setToken(data.data.token);
            return data;
        });
    }

    //check if the user is logged in
    //check if the token exists in the local storage
    authFactory.isLoggedIn = function(){
        if(AuthToken.getToken()){
            return true;
        }else{
            return false;
        }
    }

    return authFactory;
})

.factory('AuthToken',['$window',function($window){
   const tokenFactory = {};
   //store token in local storage
   tokenFactory.setToken = function(token){
       $window.localStorage.setItem('token',token);
   }
   //get token from local storage
   tokenFactory.getToken = function(){
       return $window.localStorage.getItem('token');
   }
   return tokenFactory;
}]);
