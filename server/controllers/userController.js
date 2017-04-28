/**
 * Created by ntban_000 on 4/27/2017.
 */
'use strict'

const User = require('../models/user');

exports.addUser = function(req,res){
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.name = req.body.name;
    user.email = req.body.email;
    user.type = req.body.type;
    user.save(function(err){
        if(err){
            res.send('can not create user'+err);
        }else{
            res.send('user created');
        }
    });
}

exports.authenticate = function(req,res){
    res.send("testing authenticate");
}