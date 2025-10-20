import { Persona } from "./Persona";

export class Empleado extends Persona {
    constructor(
        public nombres: string,
        public apellidos: string,
        public identificacion: string,
        public estadoCivil: string,
        public anioIncorporacion: number,
        public numeroDespacho: number
    ) {
        super(nombres, apellidos, identificacion, estadoCivil);
    }

    reasignarDespacho(nuevoDespacho: number): void {
        this.numeroDespacho = nuevoDespacho;
        console.log(`${this.nombres} ${this.apellidos} fue reasignado al despacho ${nuevoDespacho}.`);
    }

    imprimirInfo(): void {
        super.imprimirInfo();
        console.log(`Año de Incorporación: ${this.anioIncorporacion}`);
        console.log(`Número de Despacho: ${this.numeroDespacho}`);
    }
}
