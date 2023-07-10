<template>
  <h1>Adivina el pokemon</h1>
  <PokemonPicture :pokemonId="12" :showPokemon="true" />
  <PokemonOptions :pokemons="pokemonArray" />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions.js";
// console.log(getPokemonOptions())
export default {
  components: { PokemonPicture, PokemonOptions, },
  data() {
      return {
        pokemonArray: [],
      };
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArray = await getPokemonOptions();
        console.log(this.pokemonArray)
      },
    },
    //ciclo de vida de un component mount
    mounted() {
      this.mixPokemonArray();
    },
};
</script>

<style>
</style>