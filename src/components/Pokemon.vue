<template>
  <div class="max-w-sm rounded overflow-hidden shadow-l">
    <img class="m-auto" :src="spritePath" alt="pokename" />
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
    // capitalizedName: function() {
    //   return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    // }
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