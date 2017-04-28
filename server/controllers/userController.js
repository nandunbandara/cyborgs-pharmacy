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
        if(req.body.username==null || req.body.username==""){
            res.send("username not set");
        }else if (req.body.password==null || req.body.password==""){
            res.send("password not set");
        }else if (req.body.name==null || req.body.name==""){
            res.send("name not set");
        }else if (req.body.email==null || req.body.email==""){
            res.send("email not set");
        }else if(req.body.type==null || req.body.type==""){
            res.send("type not set");
        }else{
            if(err){
                res.send('can not create user'+err);
            }else{
                res.send('user created');
            }
        }
    });
}

exports.authenticate = function(req,res){
    res.send("testing authenticate");
}