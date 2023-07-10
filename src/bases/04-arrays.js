
console.log("Hello World")

//Arrays

const arreglo = [1,2,3,4]

arreglo.push(5)

const arreglo2 = [...arreglo, 6]

const arreglo3 = arreglo2.map( function(numero){
    return numero * 2
})

arreglo3.push(14)

console.log(arreglo) //OUTPUT: [1, 2, 3, 4, 5]
console.log(arreglo2) //OUTPUT: [1, 2, 3, 4, 5, 6]
console.log(arreglo3) // OUTPUT: [2, 4, 6, 8, 10, 12]

