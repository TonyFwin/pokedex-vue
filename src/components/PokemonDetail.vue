<template>
  <div class="mt-3">
    <h1>{{pokemon.name}}</h1>
    <div class="flex flex-wrap">
      <div class="sprites">
        <div class="flex justify-center">
          <img :src="pokemon.sprites.front_default" alt="pokemon.name" />
          <img class :src="pokemon.sprites.back_default" alt="pokemon.name" />
        </div>
        <div class="flex justify-center">
          <img :src="pokemon.sprites.front_shiny" alt />
          <img :src="pokemon.sprites.back_shiny" alt />
        </div>
      </div>
      <div class="stats">
        <h2>Stats</h2>
        <ul class="statList">
          <li
            v-for="(stat,i) in pokemon.stats"
            :key="i"
          >{{formatStat(stat.stat.name)}}: {{stat.base_stat}}</li>
        </ul>
      </div>
    </div>
    <div class="w-full">
      <h2>Description</h2>
      <p>{{flavorText}}</p>
    </div>
    <div class="flex flex-wrap">
      <div class>
        <h2>Abilities</h2>
        <ul>
          <li v-for="(ability,i) in pokemon.abilities" :key="i">{{formatStat(ability.ability.name)}}</li>
        </ul>
      </div>
      <div class>
        <h2>Type(s)</h2>
        <ul>
          <li v-for="(type, i) in pokemon.types" :key="i">{{type.type.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonDetail",
  data: function() {
    return {
      pokemon: {},
      flavorText: {}
    };
  },
  created: function() {
    this.fetchData();
    this.fetchFlavorText();
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
    },
    fetchFlavorText: async function() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${this.$route.params.id}`
        );
        const data = await res.json();
        this.flavorText = data.flavor_text_entries[1].flavor_text;
      } catch (e) {
        console.log(e);
      }
    },
    formatStat: function(statName) {
      return statName.replace(/-/g, " ");
    }
  }
};
</script>

<style>
h1,
li {
  text-transform: capitalize;
}
.sprites,
.stats {
  max-width: 100%;
  flex: 0 0 100%;
}

@media screen and (min-width: 550px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 800px) {
  .sprites,
  .stats {
    max-width: 50%;
    flex: 0 0 50%;
  }
}
@media screen and (min-width: 1200px) {
  ul {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>