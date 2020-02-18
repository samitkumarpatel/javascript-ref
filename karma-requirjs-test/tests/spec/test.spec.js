define(['example'], function (e) {
  describe('grunt-karma', function () {
    
    describe('one', function () {
      it('should be awesome', function () {
        expect('foo').toBe('foo')
      })
    })
    
    describe('two', function () {
      it('should be equally awesome', function () {
        expect(1).toBe(1)
      })
    })

    it('dependency test',function(){
      expect('samit').toBe(e.name);
    });

  })
});
