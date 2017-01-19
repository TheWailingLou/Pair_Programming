const chai = require('chai');
const assert = chai.assert;
const digitMath = require('../challenge').digitMath;


describe('digitMath', function () {
	it('should add 1 to each digit and then add them', function(){
		const digitSum = digitMath(12, 24);
		assert.equal(digitSum, 58)
	})
	it('work with multiple cases', function(){
		const digitSum = digitMath(1, 50);
		assert.equal(digitSum, 63)
	})
})