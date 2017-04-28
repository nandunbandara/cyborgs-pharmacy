/**
 * Created by ntban_000 on 4/27/2017.
 */
'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const  Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type:String, lowercase:true, required: true, unique:true },
    password: { type: String, required:true },
    name: { type:String, required:true },
    email: { type:String, lowercase: true, required: true, unique:true },
    type: { type:String, required:true }
})

UserSchema.pre('save',function(next){
    var user = this;
    bcrypt.hash(user.password, null, null, function(err,hash){
        if(err) return next(err);
        user.password = hash;
        next();
    })
})

module.exports = mongoose.model('User', UserSchema);