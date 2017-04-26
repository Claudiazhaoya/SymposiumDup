var assert = require('assert');
var request = require('supertest');
var express = require('express');
var path = require('path');
var should = require('should');
var Route  = express.Route;

describe('app', function(){
  it('should inherit from event emitter', function(done){
    var app = express();
    app.on('foo', done);
    app.emit('foo');
  })

  it('should be callable', function(){
    var app = express();
    assert.equal(typeof app, 'function');
  })

  it('should 404 without routes', function(done){
    request(express())
    .get('/')
    .expect(404, done);
  })
})

describe('app.router', function(){
  it('should throw with notice', function(done){
    var app = express()

    try {
      app.router;
    } catch(err) {
      done();
    }
  })
})

describe('app.path()', function(){
  it('should return the canonical', function(){
    var app = express()
      , blog = express()
      , blogAdmin = express();

    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    app.path().should.equal('');
    blog.path().should.equal('/blog');
    blogAdmin.path().should.equal('/blog/admin');
  })
})

describe('Route', function(){
  it('should work without handlers', function(done) {
    var req = { method: 'GET', url: '/' }
    var route = new Route('/foo')
    route.dispatch(req, {}, done)
  })
})

describe('.all', function(){
    it('should add handler', function(done){
      var req = { method: 'GET', url: '/' };
      var route = new Route('/foo');

      route.all(function(req, res, next) {
        req.called = true;
        next();
      });

      route.dispatch(req, {}, function (err) {
        if (err) return done(err);
        should(req.called).be.ok;
        done();
      });
    })
  })

