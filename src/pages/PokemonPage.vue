<template>
  <div v-if="!pokemon">
    <h2>Cargando...</h2>
    <img
      src="https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif"
      alt=""
    />
  </div>
  <template v-else>
    <template v-if="continueGame">
      <h1>Adivina el pokemon</h1>
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions :pokemons="pokemonArray" @selection="checkAnswer" />
    </template>
    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
    </template>
    <button @click="newGame" v-if="lostGame">Nuevo juego</button>
  </template>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions.js";
// console.log(getPokemonOptions())
export default {
  components: { PokemonPicture, PokemonOptions },
  props: {
    startCounter: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pokemonArray: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      lostGame: false,
      message: "",
      counter: 0,
      continueGame: true,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArray = await getPokemonOptions();
      const roundInt = Math.floor(Math.random() * this.pokemonArray.length);
      // console.log(rnInt)
      this.pokemon = this.pokemonArray[roundInt];
    },

    checkAnswer(selectedPokemonId) {
      this.showAnswer = true;
      this.counter += 1;
      if (selectedPokemonId == this.pokemon.id) {
        this.showPokemon = true;
        this.continueGame = true;
        this.message = `Yay!`;
        setTimeout(() => {
          this.newGame();
        }, 1000);
        // console.log(selectedPokemonId);
      } else {
        if (this.showPokemon != true) {
          this.showPokemon = false;
        }
        this.message = `No, era ${this.pokemon.name}`;
        // this.newGame();
        if (this.counter >= 3) {
          this.message = `Perdiste`;
          this.continueGame = false;
          this.lostGame = true;
          // setTimeout(() => {
          // }, 1000);
        }
      }
    },
    newGame() {
      this.counter = 0;
      this.showAnswer = false;
      this.lostGame = false;
      this.showPokemon = false;
      this.message = "";
      this.pokemon = null;
      this.continueGame = true;
      this.mixPokemonArray();
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