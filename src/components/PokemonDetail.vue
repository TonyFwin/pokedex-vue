<template>
  <div>
    <h1>{{pokemon.name}}</h1>
    <img class="m-auto" :src="pokemon.sprites.front_default" alt="pokemon.name" />
    <div>
      <h2>Abilities</h2>
      <ul>
        <li v-for="(ability,i) in pokemon.abilities" :key="i">{{ability.ability.name}}</li>
      </ul>
    </div>
    <div>
      <h2>Type(s)</h2>
      <ul>
        <li v-for="(type, i) in pokemon.types" :key="i">{{type.type.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonDetail",
  props: ["pokeindex"],
  data: function() {
    return {
      pokemon: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`
        );
        const data = await res.json();
        this.pokemon = data;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
</style>