var assert = require('assert');

describe('#additions', function (){

	describe('#1', function (){
		it('1 + 4  should be 5', function (){
			assert.equal(1 + 4, 5);
		});
	});

	describe('#2', function (){
		it('123 + 123  should be 246', function (){
			assert.equal(123 + 123, 246);
		});
	});

	describe('#3', function (){
		it('33 + 33  should NOT be 67', function (){
			assert.notEqual(33 + 33, 67);
		});
	});

}); // /#addition