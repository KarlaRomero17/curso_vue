
console.log("Hello World")

//Functions
function saludar(nombre){
    return `Hola ${nombre}`
}

//function anonima y mas segura
const saludar2= function saludar(nombre){
    return `Hola ${nombre}`
}

console.log(saludar('Liss'))
console.log(saludar2('Anonimo'))

//funciones de flecha
const saludar3 = (nombre) => {
    return `Hola ${nombre}`
}
console.log(saludar3('flecha'))

//retornar un obj entre parentesis oara q no se confunda con el cuerpo de la funcion
const getUser = () => ({
        uid: 'ABC123',
        username: 'kromero'
    }
)
console.log(getUser())

const herores = [{
    id:1,
    name: 'Batman'
},{
    id:2,
    name: 'Superman'
}]

//Tarea
const heroeExiste= getHeroeById = (id) => {
    return herores.some((heroe) => {
        if(heroe.id === id){
            return true
        }
    })
}
//otras formar de eresolver
const existe = herores.some((heroe) =>  heroe.id === 3)
const ecnotnrar = herores.find((heroe) =>  heroe.id === 1)
//desusscturacion
const {name, id} = herores.find((heroe) =>  heroe.id === 1)

console.log(herores.some(heroeExiste ) )
console.log(heroeExiste(1))
console.log(existe)
console.log(ecnotnrar)
console.log(name)
