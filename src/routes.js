import Vue from 'vue';
import Router from 'vue-router';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pokemon List',
      component: PokemonList
    },
    {
      path: '/pokemon/:id',
      name: 'Pokemon Detail',
      component: PokemonDetail
    }
  ]
});
