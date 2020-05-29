<template>
  <div id="app" class="relative pt-16 pb-32" style="min-height: 75vh;">
    <h1 class="text-xl">Pokemon</h1>
    <div>
      <PokemonList />
    </div>
  </div>
</template>

<script>
import PokemonList from "./components/PokemonList";

export default {
  name: "App",
  components: { PokemonList }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
