<template>
  <div v-if="!loading" class="mt-3">
    <div class="details-top">
      <h1>{{pokemon.name}}</h1>
      <div>
        <div>
          <span v-for="(type, i) in pokemon.types" :key="i">{{type.type.name}}</span>
        </div>
        <div>#{{$route.params.id}}</div>
      </div>
    </div>

    <div class="detail-header flex flex-wrap">
      <div class="detail-sprites">
        <div class="flex justify-center">
          <img :src="pokemon.sprites.front_default" alt="pokemon.name" />
        </div>
      </div>
    </div>

    <div class="w-full">
      <h2>Description</h2>
      <p>{{speciesData.flavor_text_entries[1].flavor_text}}</p>
    </div>
    <div>
      <h2>About</h2>
      <div class>
        <p>Genus: {{speciesData.genera[2].genus}}</p>
        <p>Height: {{pokemon.height}} cm</p>
        <p>Weight: {{pokemon.weight}} kg</p>
        <p>
          Abilities:
          <span
            v-for="(ability,i) in pokemon.abilities"
            :key="i"
          >{{formatStat(ability.ability.name)}}</span>
        </p>
      </div>
    </div>
    <div class="detail-stats">
      <h2>Stats</h2>
      <ul class="statList">
        <li
          v-for="(stat,i) in pokemon.stats"
          :key="i"
        >{{formatStat(stat.stat.name)}}: {{stat.base_stat}}</li>
      </ul>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
  name: "PokemonDetail",
  data: function() {
    return {
      loading: true,
      pokemon: {},
      speciesData: {}
    };
  },
  created: function() {
    this.fetchData();
    this.fetchSpeciesData();
    this.loading = false;
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
    fetchSpeciesData: async function() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${this.$route.params.id}`
        );
        const data = await res.json();
        this.speciesData = data;
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
.detail-sprites,
.detail-stats {
  max-width: 100%;
  flex: 0 0 100%;
}

@media screen and (min-width: 550px) {
}
@media screen and (min-width: 800px) {
  .detail-sprites,
  .detail-stats {
    max-width: 50%;
    flex: 0 0 50%;
  }
}
@media screen and (min-width: 1200px) {
  .detail-sprites {
    max-width: 30%;
    flex: 0 0 30%;
  }
  .detail-stats {
    max-width: 70%;
    flex: 0 0 70%;
  }
}
</style>