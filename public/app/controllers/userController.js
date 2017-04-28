/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('userController', ['authServices'])

.controller('loginCtrl', ['Auth', function(Auth){
    const app = this;
    app.login = function(loginData){
        app.loading = false;
        app.errorMessage = false;
        Auth.login(app.loginData).then(function(data){
            if(data.data.success){
                app.loading = true;
                app.successMessage = data.data.message+" ...Redirecting";
                $timeout(function(){
                    $location.path('/');
                },2000);
            }else{
                app.loading = false;
                app.errorMessage = data.data.message;
            }
        })
    }
}])