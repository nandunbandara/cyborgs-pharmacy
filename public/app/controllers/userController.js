/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('userController', [])

.controller('loginCtrl', ['Auth','$timeout','$location', function(Auth,$timeout,$location){
    const app = this;

    //check if the user is logged in
    if(Auth.isLoggedIn()){
        $location.path('/');
    }

    //user login function
    app.doLogin = function(loginData){
        Auth.login(app.loginData).then(function(data){
            if(data.data.success){
                app.errorMessage = null;
                app.successMessage = data.data.message+" Redirecting...";
                $timeout(function(){
                    $location.path('/');
                },2000);
            }else{
                app.errorMessage = data.data.message;
            }
        })
    }
}])

.controller('admin_usersController',['User', function(User){
    const app = this;
    //test message
    app.message = "view all users";
    //load all users
    console.log("admin_user controller")

    app.users;

    User.getUsers().then(function(data){
        app.users = data.data;
    })


}])

