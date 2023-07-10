
const app = Vue.createApp({
    // template: `
    //     <h1>Hello world </h1>
    //     <p>HDesde app.js </p>
    // `

    data(){
        return {
            quote: 'aaaa',
            author: 'Hello world',
        }
    },
    methods: {
        changeQuote( event ){
            // console.log('Hiii', event)
            this.author = 'Lissette'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },

})

app.mount('#myApp')