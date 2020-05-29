<template>
  <ul>
    <li v-for="(pokemon, i) in pokemonList" :key="pokemon.name">
      <Pokemon :url="pokemon.url" :pokename="pokemon.name" :pokeindex="i" />
    </li>
  </ul>
</template>

<script>
import Pokemon from "./Pokemon";
export default {
  name: "PokemonList",
  components: { Pokemon },
  data: function() {
    return {
      pokemonList: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36/");
        const data = await res.json();
        this.pokemonList = data["results"];
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (min-width: 550px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 800px) {
  ul {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  ul {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>