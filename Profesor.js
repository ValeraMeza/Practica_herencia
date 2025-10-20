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
exports.Profesor = void 0;
var Empleado_1 = require("./Empleado");
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho, departamento) {
        var _this = _super.call(this, nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho) || this;
        _this.departamento = departamento;
        return _this;
    }
    Profesor.prototype.cambiarDepartamento = function (nuevoDepartamento) {
        this.departamento = nuevoDepartamento;
        console.log("".concat(this.nombres, " ").concat(this.apellidos, " fue cambiado al departamento de ").concat(nuevoDepartamento, "."));
    };
    Profesor.prototype.imprimirInfo = function () {
        _super.prototype.imprimirInfo.call(this);
        console.log("Departamento: ".concat(this.departamento));
    };
    return Profesor;
}(Empleado_1.Empleado));
exports.Profesor = Profesor;
