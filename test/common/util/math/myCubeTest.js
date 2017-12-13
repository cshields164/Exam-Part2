const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube');

const num1 = 3;
const num1String = "3";

describe('myCubeTest', function() {
    describe('toCube', function() {
        var num1 = 3;
        var num1string = "3";
        it('toCube(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = myCube.toCube(num1);
            assert.equal(result, 27);
        });

        it('toCube("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = myCube.toCube(num1String);
            assert.equal(result, 27);
        });

        it('toCube should return type string', function() {
            let result = myCube.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });
});