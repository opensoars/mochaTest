var assert = require('assert');

var description = 'Some basic mathematical operations.';
describe(description, function (){

	describe('#additions', function (){

		describe('#addition1', function (){
			it('1 + 4  should be 5', function (){
				assert.equal(1 + 4, 5);
			});
		});

		describe('#addition2', function (){
			it('123 + 123  should be 246', function (){
				assert.equal(123 + 123, 246);
			});
		});

		describe('#addition3', function (){
			it('33 + 33  should NOT be 67', function (){
				assert.notEqual(33 + 33, 67);
			});
		});

	}); // /#addition


	describe('#substractions', function (){

		describe('#substraction1', function (){
			it('1 - 4  should be -3', function (){
				assert.equal(1 - 4, -3);
			});
		});

		describe('#substraction2', function (){
			it('123 - 123  should be 0', function (){
				assert.equal(123 - 123, 0);
			});
		});

		describe('#substraction3', function (){
			it('33 - 33  should NOT be 1', function (){
				assert.notEqual(33 - 33 , 1);
			});
		});

	}); // /#substraction


	describe('#multiplications', function (){

		describe('#multiplication1', function (){
			it('1 * 4  should be 4', function (){
				assert.equal(1 * 4, 4);
			});
		});

		describe('#multiplication2', function (){
			it('123 * 123  should be 15129', function (){
				assert.equal(123 * 123, 15129);
			});
		});

		describe('#multiplication3', function (){
			it('33 * 33 should NOT be 1090', function (){
				assert.notEqual(33 * 33, 1090);
			});
		});


	}); // /#multiplication


	describe('#divisions', function (){

		describe('#division1', function (){
			it('1 / 4  should be 0.25', function (){
				assert.equal(1 / 4, 0.25);
			});
		});

		describe('#division2', function (){
			it('123 / 123  should be 1', function (){
				assert.equal(123 / 123, 1);
			});
		});

		describe('#division3', function (){
			it('33 / 33  should NOT be 0', function (){
				assert.notEqual(33 / 33, 0);
			});
		});



	}); // /#division


});