<template>
  <h1>Adivina el pokemon</h1>
  <PokemonPicture :pokemonId="4" />
  <PokemonOptions />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue"
import PokemonPicture from "@/components/PokemonPicture.vue"
export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

<style>
</style>