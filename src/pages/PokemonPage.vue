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
      <h3 class="contarIntentos">
        Aciertos: <b>{{ aciertos }}</b> &nbsp;| Fallidos: <b>{{ fallidos }}</b>
      </h3>
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
      aciertos: 0,
      fallidos: 0,
      fail:0,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArray = await getPokemonOptions();
      const roundInt = Math.floor(Math.random() * this.pokemonArray.length);
      // console.log(rnInt)
      this.pokemon = this.pokemonArray[roundInt];
    },

    checkAnswer(selectedPokemonId, selectedPokemonName) {
      this.showAnswer = true;
      this.counter += 1;
      if (selectedPokemonId == this.pokemon.id) {
        this.showPokemon = true;
        this.continueGame = true;
        this.message = `Yay!`;
        if (this.pokemon.name == selectedPokemonName.trim()) {
          this.aciertos += 1;
        }
        setTimeout(() => {
          this.nextPokemon();
        }, 1000);
      } else {
        if (this.showPokemon != true) {
          this.showPokemon = false;
        }
        // this.message = `No, era ${this.pokemon.name}`;
        if (this.pokemon.name != selectedPokemonName.trim()) {
          this.fallidos += 1;
          this.fail += 1;
        }
        this.message = `Nooo!!!  Intentar nuevamente: ${this.fail}/3`;
        console.log(this.pokemon.name,selectedPokemonName, this.counter,this.showPokemon)

        if(this.pokemon.id == selectedPokemonId){
          setTimeout(() => {
            this.nextPokemon();
          }, 1000);
        }
        
        if (this.counter >= 3) {
          
          this.message = `Perdiste`;
          this.continueGame = false;
          this.lostGame = true;

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
      this.fallidos=0;
      this.aciertos=0;
      this.fail=0
      this.mixPokemonArray();
    },
    nextPokemon(){
      this.counter = 0;
      this.showAnswer = false;
      this.lostGame = false;
      this.showPokemon = false;
      this.message = "";
      this.pokemon = null;
      this.continueGame = true;
      this.fail=0
      this.mixPokemonArray();
    }
  },
  //ciclo de vida de un component mount
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
</style>