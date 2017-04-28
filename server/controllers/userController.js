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
            res.json({ success:false, message:'Username not set'});
        }else if (req.body.password==null || req.body.password==""){
            res.json({ success:false, message: 'Password not set'});
        }else if (req.body.name==null || req.body.name==""){
            res.json({ success:false, message: 'Name not set'});
        }else if (req.body.email==null || req.body.email==""){
            res.json({ success:false, message:'Email not set'});
        }else if(req.body.type==null || req.body.type==""){
            res.json({ success:false, message: 'Type nto set'});
        }else{
            if(err){
                res.json({ success:false, message:'Username or Email already exists'});
            }else{
                res.json({ success:true, message: 'User created!'});
            }
        }
    });
}

exports.authenticate = function(req,res){
    User.find({ username: req.body.username }).exec(function(err,user){
        if(err) throw err;
        if(!user){
            res.json({ success:false, message: 'Could not authenicate user!'});
        }else if(user){
            //password validation
        }
    })
}