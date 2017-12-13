var mySquare = require("./mySquare");
var myCube = require("./myCube");

module.exports = {

    toSquare: function(inpNumber) {
        return mySquare.toSquare(inpNumber);
    },

    toCube: function(inpNumber) {

        return myCube.toCube(inpNumber);
    },
}