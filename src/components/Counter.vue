<template>
  <h2>{{ customTitle}}</h2>
  <p>{{ counter }}<sup>2</sup> = {{squeareCounter}}</p>
  <p data-testid="counter">{{ counter }}</p>
  <div>
      <button @click="increase">+1</button>
      <button v-on:click="decrease">-1</button>
  </div>
</template>

<script>
export default {
    // Propiedad props: 
    props: {
        titulo: String,
        start: {
            type: Number,
            default: 100,
            validator(value){
                return value > 100

            }
        }
    },
    // name: "counter",
    data() {
        return {
            counter: this.start,
        }
    },
    // Propiedad methods: se ejecuta cada vez que se renderiza el componente
    methods: {
        getSqueareValue(){
            console.log("getSqueareValue")
            return this.counter * this.counter;
        },
        // crear metodo increase
        increase(){
            this.counter++;
        },
        // crear metodo decrease
        decrease(){
            this.counter--;
        }
    },
    // Propiedad computadas: se ejecuta cuando cambia el valor de una propiedad una vez que se ha renderizado el componente
    computed: {
        squeareCounter(){
            console.log("computed")
            return this.counter * this.counter;
        },
        customTitle(){
           return this.titulo? this.titulo :  'Counter'
        }
    }
}
</script>

<style>
    button {
        margin: 5px;
        background-color: #41b883;
        border: none;
        border-radius: 2px;
        color: #fff;
        font-size: 16px;
        padding: 6px 12px;
    }
    button:hover{
        background-color: #35495e;
        transition: 0.3s;
    }
</style>