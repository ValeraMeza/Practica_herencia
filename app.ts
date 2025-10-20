import { Estudiante } from "./Estudiante.js";
import { Profesor } from "./Profesor.js";
import { PersonalServicio } from "./PersonalServicio.js";

const estudiante = new Estudiante("Ana", "Lopez", "123456", "Soltera", "3er Año");
const profesor = new Profesor("Luis", "Martinez", "789012", "Casado", 2015, 101, "Lenguajes");
const personal = new PersonalServicio("Carla", "Perez", "345678", "Soltera", 2018, 202, "Biblioteca");

console.log("\n--- Información Inicial ---");
estudiante.imprimirInfo();
profesor.imprimirInfo();
personal.imprimirInfo();

console.log("\n--- Actualizaciones ---");
estudiante.matricularNuevoCurso("4to Año");
profesor.cambiarDepartamento("Arquitectura");
personal.trasladarSeccion("Secretaría");

console.log("\n--- Información Actualizada ---");
estudiante.imprimirInfo();
profesor.imprimirInfo();
personal.imprimirInfo();