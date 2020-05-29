<template>
  <div>
    <img :src="spritePath" alt />
    <h1>{{pokename}}</h1>
  </div>
</template>

<script>
const START_PATH =
  "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/";
const END_PATH = ".png?raw=true";
export default {
  name: "Pokemon",
  props: ["url", "pokename", "pokeindex"],
  data: function() {
    return {
      pokeInfo: {}
    };
  },
  computed: {
    spritePath: function() {
      return `${START_PATH}${this.pokeindex + 1}${END_PATH}`;
    }
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(this.pokemonPath);
        const data = await res.json();
        this.pokeInfo = data;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
</style>