<template>
  <div id="app">
    <UsuariosUser />
    <ListaUser />
  </div>
</template>


<script>
import UsuariosUser from './components/UsuariosUser.vue';
import ListaUser from './components/ListaUser.vue';

export default {
  components: {
    UsuariosUser,
    ListaUser
  }
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
