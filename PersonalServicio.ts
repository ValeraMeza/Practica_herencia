import { Empleado } from "./Empleado";

export class PersonalServicio extends Empleado {
  public seccion: string;

  constructor(
    nombres: string,
    apellidos: string,
    identificacion: string,
    estadoCivil: string,
    anioIncorporacion: number,
    numeroDespacho: number,
    seccion: string
  ) {
    super(nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho);
    this.seccion = seccion;
  }

  trasladarSeccion(nuevaSeccion: string): void {
    this.seccion = nuevaSeccion;
    console.log(`${this.nombres} ${this.apellidos} fue trasladado a la sección de ${nuevaSeccion}.`);
  }

  imprimirInfo(): void {
    super.imprimirInfo();
    console.log(`Sección: ${this.seccion}`);
  }
}
