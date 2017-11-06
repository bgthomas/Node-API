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
     * Test the /POST route
     */
    describe('/POST User', () => {
        it('it should POST a user', (done) => {
            var user = {
                email: "ben@ben.com",
                forname: "Ben"
            }
            chai.request(server)
                .post('/api/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User created!');
                    res.body.user.should.have.property('email');
                    res.body.user.should.have.property('forname');
                    res.body.user.should.have.property('sername');
                    done();
                });
        });
    });

});