// ======== Exercise 5.1 ========
// Goals:
// • Add explicit parameter type to the greet method
// • Add explicit return type to the greet method
var MC = /** @class */ (function () {
    function MC() {
    }
    MC.prototype.greet = function (event) {
        if (event === void 0) { event = 'party'; }
        return "Welcome to the ".concat(event);
    };
    return MC;
}());
var mc = new MC();
console.log('[Exercise 5.1]', mc.greet('show'));
