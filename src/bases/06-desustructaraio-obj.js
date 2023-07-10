
console.log("Hello World")

//Desestructuracion de objectos

const persona = {
    nombre: 'Liss',
    apellido: 'Romero',
    edad: 23,
    altura: 1.57,
}

const {nombre, apellido, edad, altura= 0} = persona
console.log(nombre, apellido, edad, altura)

//aqui es una desustructurasion de oersina y utilizamos un return implicito
const createHero = ({nombre, edad}) => ({
    // const {nombre, edad} = person
        id: 123,
        nombre,
        edad,
})
console.log(createHero(persona))