export class Persona {
    constructor(
        public nombres: string,
        public apellidos: string,
        public identificacion: string,
        public estadoCivil: string
    ) {}

    cambiarEstadoCivil(nuevoEstado: string): void {
        this.estadoCivil = nuevoEstado;
        console.log(`${this.nombres} ${this.apellidos} cambió su estado civil a ${nuevoEstado}.`);
    }

    imprimirInfo(): void {
        console.log(`Nombre: ${this.nombres} ${this.apellidos}`);
        console.log(`Identificación: ${this.identificacion}`);
        console.log(`Estado Civil: ${this.estadoCivil}`);
    }
}
