"use strict";
exports.__esModule = true;
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(valor1, valor2) {
        var _this = this;
        this.resultado = function () {
            return (_this.a + _this.b);
        };
        this.a = valor1;
        this.b = valor2;
    }
    return Suma;
}());
exports.Suma = Suma;
