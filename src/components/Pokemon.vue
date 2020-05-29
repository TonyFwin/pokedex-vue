<template>
  <router-link :to="pokemonPath">
    <div class="card m-1 rounded-lg p-6 shadow-md hover:shadow-xl">
      <img class="m-auto" :src="spritePath" alt="pokename" />
      <h1>{{pokename}}</h1>
    </div>
  </router-link>
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
    },
    pokemonPath: function() {
      return `/pokemon/${this.pokeindex + 1}`;
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
.card {
  transition: 0.3ms ease-in-out;
}

.card:hover {
  transform: translateY(-3px);
}
</style>