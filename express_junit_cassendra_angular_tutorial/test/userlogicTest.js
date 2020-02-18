var assert = require('assert');
var fs = require('fs');

describe('#userlogc',function(){
    var userlogic;

    beforeEach(function(){
        userlogic = require('../logic/userlogic')({
            service : {
                getUsers : function(callback) {
                    //const x = [{'userid' : 'spa349','id':1},{'userid' : 'abc123','id':1}];
                    const fromFile = require('./testdata/users');
                    callback(null,fromFile);
                }  
            }
        });
    });

    it('should manipulate userid and return',function(done){
        userlogic.getUsers(function(err,res){
            if(err){
                done(err);
            }else {
                assert.equal(2,res.length);
                assert.equal('test2samit@org',res[0].uid);
                done();
            }
        });
    })
})