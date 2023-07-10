// console.log("Hello World")
//npm start

//Async - Await
import giphyApi from './bases/11-axios'

const getImagen = async() => {
    try {
        const {data} = (await giphyApi.get('/random')).data
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.error('Error en peticion ',error)
        throw error
    }
}

getImagen()