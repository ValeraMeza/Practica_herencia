"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombres, apellidos, identificacion, estadoCivil) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.estadoCivil = estadoCivil;
    }
    Persona.prototype.cambiarEstadoCivil = function (nuevoEstado) {
        this.estadoCivil = nuevoEstado;
        console.log("".concat(this.nombres, " ").concat(this.apellidos, " cambi\u00F3 su estado civil a ").concat(nuevoEstado, "."));
    };
    Persona.prototype.imprimirInfo = function () {
        console.log("Nombre: ".concat(this.nombres, " ").concat(this.apellidos));
        console.log("Identificaci\u00F3n: ".concat(this.identificacion));
        console.log("Estado Civil: ".concat(this.estadoCivil));
    };
    return Persona;
}());
exports.Persona = Persona;
