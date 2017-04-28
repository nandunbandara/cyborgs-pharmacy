/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('userController', [])

.controller('loginCtrl', ['Auth','$timeout','$location', function(Auth,$timeout,$location){
    const app = this;

    //check if the user is logged in
    if(Auth.isLoggedIn()){
        console.log("user is logged in");
    }else{
        console.log("user is not logged in");
    }

    app.doLogin = function(loginData){
        console.log("login called")
        app.loading = true;
        app.errorMessage = false;
        Auth.login(app.loginData).then(function(data){
            if(data.data.success){
                app.loading = false;
                app.successMessage = data.data.message+" ...Redirecting";
                $timeout(function(){
                    // $location.path('/');
                },2000);
            }else{
                app.loading = false;
                app.errorMessage = data.data.message;
            }
        })
    }
}])