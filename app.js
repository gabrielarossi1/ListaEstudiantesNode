const readlineSync = require('readline-sync');

const {mostrarListaEstudiantes} = require('./lista_estudiantes')

const registrarEstudiantes = () => {
    let cantidadEstudiantes = readlineSync.question("Ingresar la cantidad de estudiantes a registrar: ")

    console.log("Cantidad de Estudiantes a registrar: " + cantidadEstudiantes)

    let estudiantes = [];

    for(let i = 0; i < cantidadEstudiantes; i++){
        let nombreEstudiante = readlineSync.question("Ingrese el nombre del estudiante " + i + ": ")
        let edad = parseInt(readlineSync.question("ingrese la edad de " + nombreEstudiante + ": "))
        
        let estudiante = {
            nombre: nombreEstudiante,
            edad: edad
        }

        estudiantes.push(estudiante);
    }

    return estudiantes;
}


//Ejecutando la funcion registrar estudiantes
let estudiantesRegistrados = registrarEstudiantes();
mostrarListaEstudiantes(estudiantesRegistrados);



// const calcularPromedio = (numeros) => {
//     let suma = 0;

//     for(let i = 0; i < numeros.length; i++){
//         suma += numeros[i]
//     }

//     let promedio = suma /numeros.length;
//     return promedio;
// }