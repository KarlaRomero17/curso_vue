// console.log("Hello World")
//npm start
//AXIOS
import axios from 'axios'
const apiKey = 'yJe6wnK9eAP5oeScZE24175O84VowXUX'
// fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)//esto es una promesa

// axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
// pero para trabajar con varios endpoints
//creamos instancia
const giphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
})
 export default giphyApi
 
// giphyApi.get('/random')
//     .then((resp) => {
//         const { data } = resp.data
//         const { url } = data.images.original
//         const img = document.createElement('img')
//         img.src = url
//         document.body.append(img)
//     })