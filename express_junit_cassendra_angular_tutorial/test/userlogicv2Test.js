var assert = require('assert');

describe('#userLogic Module',function(){
    var ulogic;
    
    beforeEach(function() {
       //mocking through constructor
       ulogic = require('../logic/userlogicv2')({
            User : {
                getAll : function(callback){
                    callback([ 'Superman', 'Batman', 'Flash' ]);
                }
            }
        }); 
    });

    it('should call the public method from module',function(){
        assert.equal('raj',ulogic.getName('raj'))
    });

    it('should return the default value',function(){
        assert.equal('samit',ulogic.getName())
    });

    it('should return the user list from mock',function(done) {
        ulogic.getUserList(function(data){
            assert.deepEqual([ 'Superman', 'Batman', 'Flash' ],data);
            done();
        });
        
    });
})