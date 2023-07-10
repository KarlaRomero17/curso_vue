// console.log("Hello World")

//Promesas

// console.log('Inicio')
//     new Promise((resolve, reject) => {
//         console.log('Cuerpo de la promesa')
//         // resolve('Promesa resuleta')
//         reject('Promesa resuleta con error')
        
//     }).then(msg => console.log(msg))
//     .catch( console.warn ) //esto es igual a err => console.warn(err)
// console.log('Fin')
    
    //ARGUMENTOS DE LSA PROMESAS
import { getHeroeById } from './bases/08-import-export'

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe')
            }
        },1000)
    })
    // .then(msg => console.log(msg))
    // .catch(console.warn)
}

getHeroByIdAsync(200)
.then(h => console.log(h))
.catch(console.warn)
