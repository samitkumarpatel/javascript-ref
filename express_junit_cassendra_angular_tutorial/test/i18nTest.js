var assert = require('assert');
var i18n = require('../logic/i18n');

describe('#i18n Test',function() {

    it('should translated hello to hello',function() {
      assert.equal('hello',i18n('hello'));
    });

    it('should translated hello to hola',function() {
      assert.equal('hola',i18n('hello','es'));
    });
});