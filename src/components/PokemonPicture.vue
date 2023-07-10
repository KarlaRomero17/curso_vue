import PokemonPicture from '@/components/PokemonPicture.vue';
<template>
  <div class="pokemon-container">
    <img
      :src="pokemonImage"
      alt="pokemon"
      class="pokemon-show"
    />
    <img v-if="showPokemon" :src="pokemonImage" alt="pokemon" class="fade-in">
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    pokemonImage() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.pokemon-show {
  filter: brightness(0);
}
</style>