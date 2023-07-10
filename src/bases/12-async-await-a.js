// console.log("Hello World")
//npm start
//Async - Await
const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve ('Tenemos un valor en la promesa')
            reject('Error en mi promesa')
        }, 1000)
    })
}

//funcion async. Hace una funcion en una promesa utilizando el async
const medirTiempoAsync = async () => {
    try {
        console.log('Inicio')
        const resp = await miPromesa()
        console.log(resp)
        console.log('Fin')
        return 'Fin de medir tiempo async'
    } catch (error) {
        throw 'Error en medir tiempo async'
        // return 'Catch en medir tiempo async'
    }

}

medirTiempoAsync().then(console.log)
    .catch(console.warn)