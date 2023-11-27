<script>
import Registration from "./components/Registration.vue";

import Authenticated from './components/Authenticated.vue';

export default {
  components: { Authenticated },};
</script>

<template>
  <h1 class="container">Головна</h1>
  <div v-if="isAuthenticated">
      <Authenticated />
  </div>
   



  <router-view></router-view>
</template>

<style scoped>
</style>
