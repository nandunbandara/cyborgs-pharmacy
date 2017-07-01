/**
 * Created by root on 7/1/17.
 */
const mongoose = require('mongoose');
const User = require('./user.model');

//dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server')
const should = chai.should();

chai.use(chaiHttp);

describe('Users', function(){
    this.timeout(15000);
//    test GET route
    describe('GET users', function(){
        //get all the users
        it('should get all the users', function(done){
            chai.request(server)
                .get('/users')
                .end(function(err,res){
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        })

        //get user by the username
        it('should get the user by username', function(done){
            chai.request(server)
                .get('/users/ntb123')
                .end(function(err,res){
                    res.should.have.status(200);
                    res.body.should.have.property('email').eql('nandun@pharm.lk');
                    res.body.should.have.property('name').eql('nandun');
                    res.body.should.have.property('username').eql('ntb123');
                    res.body.should.have.property('password');
                    res.body.should.have.property('permission').eql('admin');
                    done();
                })
        })
    })

//    test POST
    describe('POST users', function(){

    })
})
