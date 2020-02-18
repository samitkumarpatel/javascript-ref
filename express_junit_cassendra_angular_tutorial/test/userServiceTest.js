var assert = require('chai').assert;
//var userservice = require('../service/userservice');

describe('#User api test', function() {
    var userservice;

    beforeEach(function() {
        userservice = require('../service/userservice')/*({
            
        });*/
    });



    it('name should be same', function() {
        assert.equal(userservice.getName(), 'samit');
    });
});   
