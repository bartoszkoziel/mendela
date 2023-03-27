"use strict";
exports.__esModule = true;
exports.Pill = void 0;
var Pill = /** @class */ (function () {
    function Pill(x, y) {
        this.positions.push({ x: x, y: y });
        this.positions.push({ x: x + 1, y: y });
        this.interval = setInterval(function () {
            console.log("lecI!");
        }, 1000);
    }
    return Pill;
}());
exports.Pill = Pill;
