/**
 * Created by ntban_000 on 4/28/2017.
 */
angular.module('userController', [])

.controller('loginCtrl', ['Auth','$timeout','$location','$rootScope', function(Auth,$timeout,$location,$rootScope){
    const app = this;

    //user login function
    app.doLogin = function(loginData){
        Auth.login(app.loginData).then(function(data){
            //if successful, login user, show redirect message and take user to next view
            if(data.data.success){
                //error message to be shown if user is not validated
                app.errorMessage = null;
                //show success message
                app.successMessage = data.data.message+" Redirecting...";
                $timeout(function(){
                    Auth.getUser().then(function(data){
                        //set user data to the root scope to be shared within the application
                        $rootScope.user = data;
                        //check user permissions
                        //if the user is an admin take him/her to the administrator view
                        //else take the user to the general user view
                        //Dev:add more conditions to check for more permissions
                        if(data.data.permission=="admin"){
                            $location.path('/admin/users');
                        }else{
                            $location.path('/drugs');
                        }
                    })
                },2000);
            }else{
                //set the error message to be shown if the user validation is not successful
                app.errorMessage = data.data.message;
            }
        })
    }
}])

.controller('admin_usersController',['User','UserData','$location', function(User,UserData,$location){
    const app = this;
    app.users;

    //retreive all the registered users
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

    //set selected permission to registration data
    app.setPermission = function(permission){
        app.regData.permission = permission;
        console.log(app.regData);
    }

    //delete a user
    app.deleteUser = function(username){
        User.deleteUser(username).then(function(data){
            console.log(data);
            app.loadData();
        })
    }

    //function to retreive all the registered users
    app.loadData = function(){
        User.getUsers().then(function(data){
            app.users = data.data;
        })
    }

    //share data and load the update user view
    app.gotoUpdate = function(username){
        UserData.setData(username);
        $location.path('/admin/updateUser');
    }

}])

.controller('admin_updateUserController',['UserData', 'User','$location', function(UserData,User,$location){
    const app = this;
    app.regData = {};
    //if user data is not set, redirect the user back to the list of users
    //else load the form data
    if(!UserData.getData()){
        $location.path('/admin/users');
    }else{
        app.username = UserData.getData();
        User.getUserByUsername(app.username).then(function(data){
            //load form data
            console.log(data.data);
            console.log(data.data.name);
            app.regData.name = data.data.name;
            app.regData.email = data.data.email;
        }).catch(function(err){
            //store error on data load
            app.data_load_error = err;
        })

        //load permission on form
    }

    app.update = function(){
        User.updateUser(app.username, regData).then(function(data){
            //store response from the update response
            app.update_response = data;
        }).catch(function(err){
            //store error from the update response
            app.update_error = err;
        })
    }

}])

