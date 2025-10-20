"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalServicio = void 0;
var Empleado_1 = require("./Empleado");
var PersonalServicio = /** @class */ (function (_super) {
    __extends(PersonalServicio, _super);
    function PersonalServicio(nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho, seccion) {
        var _this = _super.call(this, nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho) || this;
        _this.seccion = seccion;
        return _this;
    }
    PersonalServicio.prototype.trasladarSeccion = function (nuevaSeccion) {
        this.seccion = nuevaSeccion;
        console.log("".concat(this.nombres, " ").concat(this.apellidos, " fue trasladado a la secci\u00F3n de ").concat(nuevaSeccion, "."));
    };
    PersonalServicio.prototype.imprimirInfo = function () {
        _super.prototype.imprimirInfo.call(this);
        console.log("Secci\u00F3n: ".concat(this.seccion));
    };
    return PersonalServicio;
}(Empleado_1.Empleado));
exports.PersonalServicio = PersonalServicio;
