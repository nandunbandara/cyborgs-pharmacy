/**
 * Created by ntban_000 on 4/27/2017.
 */
'use strict'

const User = require('../models/user');
const webtoken = require('jsonwebtoken');
const secret = '#cyb0rgz!';

exports.addUser = function(req,res){
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.name = req.body.name;
    user.email = req.body.email;
    user.permission = req.body.permission;
    user.save(function(err){
        if(req.body.username==null || req.body.username==""){
            res.status(406).json({ success:false, message:'Username not set'});
        }else if (req.body.password==null || req.body.password==""){
            res.status(406).json({ success:false, message: 'Password not set'});
        }else if (req.body.name==null || req.body.name==""){
            res.status(406).json({ success:false, message: 'Name not set'});
        }else if (req.body.email==null || req.body.email==""){
            res.status(406).json({ success:false, message:'Email not set'});
        }else{
            if(err){
                res.status(406).json({ success:false, message:'Username or Email already exists'});
            }else{
                res.status(201).json({ success:true, message: 'User created!'});
            }
        }
    });
}

exports.deleteUser = function(req,res){
    User.find({ username: req.params.username }).remove().exec(function(err,data){
        if(err){
            res.status(304).json({ success:false, message: "Could not delete user record!"});
        }else{
            res.status(200).json({ success:true, message: "User deleted!"});
        }
    })
}

exports.authenticate = function(req,res){
    User.findOne({ username: req.body.username }).select('username password email name permission').exec(function(err,user){
        if(err) throw err;
        if(!user){
            res.json({ success:false, message: 'Could not authenticate user!'});
        }else if(user){
            //password validation
            const validPassword = user.comparePassword(req.body.password);
            if(!validPassword){
                res.json({ success:false, message:'Could not validate user!' });
            }else{
                //set json web token
                const token = webtoken.sign({
                    username: user.username,
                    name: user.name,
                    email: user.email,
                    permission: user.permission
                },secret, { expiresIn: '1h'}); 
                res.json({ success:true, message:'User authenticated!', token:token});
            }
        }
    })
}



//get user details
exports.me = function(req,res){
    const token = req.body.token || req.body.query || req.headers['x-access-token'];

    if(token){
        webtoken.verify(token, secret, function(err, decoded){
            if(err) {
                res.json({ success:false, message: 'Token invalid'});
            }else{
                res.send(decoded);
            }
        })
    }else{
        res.json({ success:false, message: 'Token not set'});
    }
}

//get all users
exports.users = function(req,res){
    User.find({}).select(' username password email name permission ').exec(function(err, users){
        if(err){
            res.json({ success:false, message: "Could not retrieve users"})
        }else{
            res.json(users);
        }
    })
}


