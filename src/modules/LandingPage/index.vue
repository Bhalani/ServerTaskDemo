<template>
  <v-container>
    <h1> Server Task Simulator </h1>
    <v-row class="d-flex">
      <v-col class="server">
        <servers></servers>
      </v-col>

      <v-col class="tasks">
        <tasks></tasks>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Servers from '../Servers/index.vue';
import Tasks from '../Tasks/index.vue'

export default {
  name: 'LandingPage',
  components: {
    Servers,
    Tasks
  }
}
</script>

<style lang="scss">
  .server, .tasks {
    margin: 20px;
    .warning {
      background: #ff9800;
    }
    .state {
      margin: 10px 10px 40px;
    }
    .theme--light.v-btn {
      background-color: #3f51b5 !important;
      color: #FFF;
    }
  }
  .server {
    .v-list-item {
      border: 1px solid #8690c5;
      margin: 5px 20px;
      min-height: 35px;
    }
  }
  .task-form {
    margin: 10px;
    display: flex;
    justify-content: center;

    .v-text-field {
      max-width: 80px;
      margin-top: 0;
      padding-top: 0;
      margin-right: 20px;

      input {
        padding: 8px;
      }
    }
    .v-btn {
      align-self: start;
    }
  }
  .v-progress-linear__determinate{
    background-color:  #5c69b3;
    color: #FFF;
  }

  .v-progress-linear__content {
    border: 1px solid #2139c2;
    padding: 10px;
  }

  .spacer {
    margin: 20px;
  }

  .v-progress-linear {
    margin-right: 10px;
  }

  th {
    min-width: 100px;
  }
</style>