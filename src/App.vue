<template>
  <div id="app">
    <LandingPage></LandingPage>
  </div>
</template>

<script>
import LandingPage from '@/modules/LandingPage/index.vue';

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
