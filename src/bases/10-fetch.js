// console.log("Hello World")
//npm start
//Fetch API

const apiKey = 'yJe6wnK9eAP5oeScZE24175O84VowXUX'
// http://api.giphy.com/v1/gifs/random?api_key=yJe6wnK9eAP5oeScZE24175O84VowXUX]

// utilizar fetch
fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)//esto es una promesa
.then (resp => resp.json()
    //serializar el readbleStream
    //{ resp.json().then( resp =>console.log(resp))}
).then(({data}) => {//utilizamos desestructuracion para obtener la data de la img
    const {url} = data.images.original
    const img= document.createElement('img')
    img.src = url
    // document.body.append(img) //para que se muestre en el body
})