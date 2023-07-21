<template>
  <!-- <img class="fade-in" alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Menuu></Menuu> -->
  <Pokemon />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Pokemon from './pages/PokemonPage.vue';
// import Menuu from "@/components/Menuu.vue";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Menuu,
    Pokemon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
