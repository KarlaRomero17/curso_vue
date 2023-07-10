<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!--HelloWorld msg="Holiwisiwis"/-->
  <!--Counter  :start="100"/-->
  <!--Counter titulo=""/-->
  <Indecision></Indecision>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'
export default {
  name: 'App',
  components: {
  //   HelloWorld
      // Counter,
      Indecision
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
