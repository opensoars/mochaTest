var assert = require('assert');

describe('#substractions', function (){

	describe('#1', function (){
		it('1 - 4  should be -3', function (){
			assert.equal(1 - 4, -3);
		});
	});

	describe('#2', function (){
		it('123 - 123  should be 0', function (){
			assert.equal(123 - 123, 0);
		});
	});

	describe('#3', function (){
		it('33 - 33  should NOT be 1', function (){
			assert.notEqual(33 - 33 , 1);
		});
	});

}); // /#substraction