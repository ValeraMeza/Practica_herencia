import { Empleado } from "./Empleado";

export class Profesor extends Empleado {
    constructor(
        nombres: string,
        apellidos: string,
        identificacion: string,
        estadoCivil: string,
        anioIncorporacion: number,
        numeroDespacho: number,
        public departamento: string
    ) {
        super(nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho);
    }

    cambiarDepartamento(nuevoDepartamento: string): void {
        this.departamento = nuevoDepartamento;
        console.log(`${this.nombres} ${this.apellidos} fue cambiado al departamento de ${nuevoDepartamento}.`);
    }

    imprimirInfo(): void {
        super.imprimirInfo();
        console.log(`Departamento: ${this.departamento}`);
    }
}
