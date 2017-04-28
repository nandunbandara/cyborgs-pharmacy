/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('userController', ['authServices'])

.controller('loginCtrl', ['Auth','$timeout','$location', function(Auth,$timeout,$location){
    const app = this;
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