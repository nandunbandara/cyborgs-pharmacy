/**
 * Created by ntban_000 on 4/27/2017.
 */
'use strict'

const mongoose = require('mongoose');
const  Scheme = mongoose.Schema;

const UserSchema = new Schema({
    username: { type:String, lowercase:true, required: true, unique:true },
    password: { type: String, required:true },
    name: { type:String, required:true },
    email: { type:String, lowercase: true, required: true, unique:true },
    type: { type:String, required:true }
})

module.exports = mongoose.model('User', UserSchema);