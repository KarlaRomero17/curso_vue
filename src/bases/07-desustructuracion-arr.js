
console.log("Hello World")

//Desustructuracion de arreglos: en los arreglos la posicion es importante

const personajes = ['Goku', 'Vegeta', 'Trunks']

// const goku = personajes[0]
//ahora desustruturamos con arreglos
const [goku, vegeta, trunks, goten='NA'] = personajes

const returnArray = () => {
    return ['ABC', 123]
}
const [letras, numeros] = returnArray()
console.log(goten)
console.log(letras, numeros)

