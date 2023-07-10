<template>
  <h1>Adivina el pokemon</h1>
  <PokemonPicture :pokemonId="12" :showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue"
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions.js";
// console.log(getPokemonOptions())
export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

<style>
</style>