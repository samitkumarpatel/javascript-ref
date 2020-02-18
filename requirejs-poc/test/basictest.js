define(['app2'], function (app2) {
    describe('basic test', function () {
        it('test#1', function () {
            expect(1).toBe(1);
        });

        it('name should be same',function(){
            expect(app2.name).toBe('sample');
        })
    });
});


