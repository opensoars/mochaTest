var assert = require('assert');

describe('#divisions', function (){

	describe('#1', function (){
		it('1 / 4  should be 0.25', function (){
			assert.equal(1 / 4, 0.25);
		});
	});

	describe('#2', function (){
		it('123 / 123  should be 1', function (){
			assert.equal(123 / 123, 1);
		});
	});

	describe('#3', function (){
		it('33 / 33  should NOT be 0', function (){
			assert.notEqual(33 / 33, 0);
		});
	});



}); // /#division