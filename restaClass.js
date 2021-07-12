"use strict";
exports.__esModule = true;
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(valor1, valor2) {
        var _this = this;
        this.resultado = function () {
            return (_this.a - _this.b);
        };
        this.a = valor1;
        this.b = valor2;
    }
    return Resta;
}());
exports.Resta = Resta;
