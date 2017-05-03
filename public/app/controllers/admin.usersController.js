/**
 * Created by ntban_000 on 5/2/2017.
 */
//users view on administration panel
//crud on users
angular.module('admin.usersController',[])

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