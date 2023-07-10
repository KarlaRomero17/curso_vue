

console.log("Hello World")

// Object literal

//esto es un objecto
const persona = {
    nombre: 'Liss',
    apellido: 'Romero',
    edad: 23,
    direccion:{
        pais: 'El Salvador',
        departamento:'La Libertad',
        municipio: 'Lourdes'
    }
}

//obj pasado por referencia. Cualquier cambio en persona2 afecta a persona
// const persona2 = persona

//utilizar operador spread para esparcir cada unada de las propiedades y romper la referencia
const persona2 = {...persona} //operador spread/ operador rest segun el caso
persona2.nombre = 'Karla'
console.log(persona)
console.log(persona2)

//este es un set, no obj
// const personaSet = new Set();
// console.log(personaSet)

