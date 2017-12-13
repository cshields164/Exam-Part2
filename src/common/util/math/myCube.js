module.exports = {

    toCube: function(inpNumber) {
        var num = NaN;
        if (typeof inpNumber === "number") {
            num = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            num = Number(inpNumber);
        }
        return Math.pow(num, 3);
    },
}