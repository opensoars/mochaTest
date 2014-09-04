var assert = require('assert');

describe('#multiplications', function (){

	describe('#1', function (){
		it('1 * 4  should be 4', function (){
			assert.equal(1 * 4, 4);
		});
	});

	describe('#2', function (){
		it('123 * 123  should be 15129', function (){
			assert.equal(123 * 123, 15129);
		});
	});

	describe('#3', function (){
		it('33 * 33 should NOT be 1090', function (){
			assert.notEqual(33 * 33, 1090);
		});
	});


}); // /#multiplication