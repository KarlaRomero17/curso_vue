
// console.log("Hello World")

//Importaciones y exportaciones
// import { owners } from './data/heroes'
import superHeroes from '../data/heroes'
// console.log(superHeroes)
// const [dc, marvel] = owners
// console.log(dc, marvel)

//crear function getHeroebByid(id) y retornar name

const getHeroeById = (id) => {
    return superHeroes.find((heroe) => heroe.id === id)
}

// console.log(getHeroeById(2))

//crear funcion getHeroesByOwner
const getHeroesByOwner = (owner) => superHeroes.filter((heroe) => heroe.owner === owner)

// console.log(getHeroesByOwner('Marvel'))

export {
    getHeroeById,
    getHeroesByOwner
}

/**
 * esto va en el index.js
//Importaciones y exportaciones
import {getHeroeById, getHeroesByOwner} from './bases/08-import-export'

console.log(getHeroeById(2))


console.log(getHeroesByOwner('DC'))
 */