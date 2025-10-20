import { Persona } from "./Persona";

export class Estudiante extends Persona {
    constructor(
        nombres: string,
        apellidos: string,
        identificacion: string,
        estadoCivil: string,
        public curso: string
    ) {
        super(nombres, apellidos, identificacion, estadoCivil);
    }

    matricularNuevoCurso(nuevoCurso: string): void {
        this.curso = nuevoCurso;
        console.log(`${this.nombres} ${this.apellidos} se matriculó en el curso ${nuevoCurso}.`);
    }

    imprimirInfo(): void {
        super.imprimirInfo();
        console.log(`Curso: ${this.curso}`);
    }
}