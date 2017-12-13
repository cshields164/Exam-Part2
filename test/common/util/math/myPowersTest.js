const assert = require('chai').assert;
const myPowers = require('../../../../src/common/util/math/myPowers');



describe('myPowers', function() {
    describe('toSquare', function() {
        var num1 = 2;
        var num1String = "2";
        it('toSquare(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = myPowers.toSquare(num1);
            assert.equal(result, 4);
        });

        it('toSquare("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = myPowers.toSquare(num1String);
            assert.equal(result, 4);
        });

        it('toSquare should return type string', function() {
            let result = myPowers.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    });
});

describe('toCube', function() {
    var num1 = 3;
    var num1String = "3";
    it('toCube(' + num1 + ') should return string value of "' + num1String + '"', function() {
        let result = myPowers.toCube(num1);
        assert.equal(result, 27);
    });

    it('toCube("' + num1String + '") should return string value of "' + num1String + '"', function() {
        let result = myPowers.toCube(num1String);
        assert.equal(result, 27);
    });

    it('toCube should return type string', function() {
        let result = myPowers.toCube(num1);
        assert.typeOf(result, 'number');
    });
});