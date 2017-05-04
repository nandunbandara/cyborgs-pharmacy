/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('userController', [])

.controller('loginCtrl', ['Auth','$timeout','$location','$rootScope', function(Auth,$timeout,$location,$rootScope){
    const app = this;

    //user login function
    app.doLogin = function(loginData){
        Auth.login(app.loginData).then(function(data){
            if(data.data.success){
                app.errorMessage = null;
                app.successMessage = data.data.message+" Redirecting...";
                $timeout(function(){
                    Auth.getUser().then(function(data){
                        $rootScope.user = data;
                        if(data.data.permission=="admin"){
                            $location.path('/admin/users');
                        }else{
                            $location.path('/drugs');
                        }
                    })
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

    //add new user
    app.regData = {};
    app.showErrorMsg = false;

    app.addUser = function(regData){
        app.showErrorMsg = false;
        User.addUser(regData).then(function(data){
            console.log(data);
        })
    }

}])

