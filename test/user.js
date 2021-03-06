'use strict';

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");
var User = require('../models/user');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => {
            done();
        });
    });

    /*
     * Test the /GET route
     */
    describe('/GET user', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/api/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    /*
     * Test the /GET/:id route
     */
    describe('/GET/:id user', () => {
        it('it should GET user by supplied id', (done) => {
            let user = new User({
                email: "ben@ben.com",
                forename: "Ben",
                surname: "thomas"
            });
            user.save((err, user) => {
                chai.request(server)
                    .get('/api/users/' + user.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('email');
                        res.body.should.have.property('forename');
                        res.body.should.have.property('surname');
                        res.body.should.have.property('_id').eql(user.id);
                        done();
                    });
            });
        });
    });

    /*
     * Test the /POST route
     */
    describe('/POST User', () => {
        it('it should POST a user', (done) => {
            let user = {
                email: "ben@ben.com",
                forename: "Ben",
                surname: "Thomas"
            }
            chai.request(server)
                .post('/api/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User created!');
                    res.body.user.should.have.property('email');
                    res.body.user.should.have.property('forename');
                    res.body.user.should.have.property('surname');
                    done();
                });
        });
    });

    /*
     * Test the /DELETE route
     */
    describe('/DELETE/:id User', () => {
        it('it should DELETE user by supplied id', (done) => {
            let user = new User({
                email: "ben@ben.com",
                forename: "Ben",
                surname: "thomas"
            });
            user.save((err, user) => {
                chai.request(server)
                    .delete('/api/users/' + user.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql("User deleted!");
                        done();
                    });
            });
        });
    });

    /* 
     *
     * Test the /PUT route
     */
    describe('/PUT/:id book', () => {
        it('it should UPDATE a user given an id', (done) => {
            let user = new User({
                email: "ben@ben.com",
                forename: "Ben",
                surname: "Thomas"
            });
            user.save((err, user) => {
                chai.request(server)
                    .put('/api/users/' + user.id)
                    .send({ email: "pip@pip.com", forename: "Pippa", surname: "Thomas" })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('User updated!');
                        res.body.user.should.have.property('email').eql('pip@pip.com');
                        res.body.user.should.have.property('forename').eql('Pippa');
                        res.body.user.should.have.property('surname').eql('Thomas');
                        done();
                    });
            });
        });
    });

});