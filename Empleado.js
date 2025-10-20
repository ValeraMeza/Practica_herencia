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
exports.Empleado = void 0;
var Persona_1 = require("./Persona");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho) {
        var _this = _super.call(this, nombres, apellidos, identificacion, estadoCivil) || this;
        _this.nombres = nombres;
        _this.apellidos = apellidos;
        _this.identificacion = identificacion;
        _this.estadoCivil = estadoCivil;
        _this.anioIncorporacion = anioIncorporacion;
        _this.numeroDespacho = numeroDespacho;
        return _this;
    }
    Empleado.prototype.reasignarDespacho = function (nuevoDespacho) {
        this.numeroDespacho = nuevoDespacho;
        console.log("".concat(this.nombres, " ").concat(this.apellidos, " fue reasignado al despacho ").concat(nuevoDespacho, "."));
    };
    Empleado.prototype.imprimirInfo = function () {
        _super.prototype.imprimirInfo.call(this);
        console.log("A\u00F1o de Incorporaci\u00F3n: ".concat(this.anioIncorporacion));
        console.log("N\u00FAmero de Despacho: ".concat(this.numeroDespacho));
    };
    return Empleado;
}(Persona_1.Persona));
exports.Empleado = Empleado;
