import pokemonApi from "@/api/pokemonApi";

const getPokemons = () =>{
    //creamos un array de 650 posiciones
    const pokemonsArr = Array.from(Array(650));
    //mapeamos el array y le asignamos un valor a cada posicion
    return pokemonsArr.map((_, index) => index + 1);
}

const getPokemonOptions = async() =>{
    const sortPokemon = getPokemons()
    //al array de 650 posiciones le hacemos un sort para ordenarlo de forma aleatoria
    sortPokemon.sort(() => Math.random() - 0.5);

    const pokemons = await getPokemonNames(sortPokemon.splice(0,4));

    // console.table(pokemons)
    return pokemons

}

//cfuncion para obtener los nombres del pokemon de los primeros 4
const getPokemonNames = async( [a,b,c,d] = []) =>{
    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp.data.name)

    // console.log(a,b,c,d)
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    const [p1, p2, p3, p4] = await Promise.all(promiseArr)
    return [
        { id: p1.data.id, name: p1.data.name},
        { id: p2.data.id, name: p2.data.name},
        { id: p3.data.id, name: p3.data.name},
        { id: p4.data.id, name: p4.data.name},
    ]

}

export default getPokemonOptions;