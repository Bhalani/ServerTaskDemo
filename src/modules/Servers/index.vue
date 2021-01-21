<template>
  <v-card>
    <v-alert :light="true" type="warning">
      Note: Max 10 servers can be added.
    </v-alert>
    <div>
      <v-btn class="theme-blue" @click="addServer" v-if="availableServers.length < 10">
        Add Server
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    <div>
      <v-btn @click="destroyFreeServers" v-if="availableServers.length > 0">
        Remove Free Servers
      </v-btn>
    </div>
    <div class="state">
      <table>
        <tr>
          <th>Total Servers</th>
          <th>Occupied</th>
          <th>Occupied</th>
        </tr>
        <tr>
          <td>{{ availableServers.length }}</td>
          <td>{{ availableServers.length - idelServers.length }}</td>
          <td>{{ idelServers.length }}</td>
        </tr>
      </table>
    </div>
    <h4> Servers </h4>
    <v-list>
      <v-list-item v-for="server in availableServers" :key="server.id">
        {{server.id}} {{ server.taskId ? 'Task:' : ''}} {{server.taskId}}  {{server.status}}
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Servers",
  computed: {
    ...mapState("servers", ["availableServers"]),
    ...mapState("tasks", ["tasks"]),
    macServerLimitReached() {
      return this.availableServers.length < 10
    },
    idelTasks() {
      return this.tasks.filter( task => {
        return task.isIdle()
      })
    },
    idelServers() {
      return this.availableServers.filter(server => {
        return !server.taskId;
      })
    },
  },
  methods: {
    ...mapActions("servers", ["createServer", "destroyFreeServers"]),
    addServer() {
      let task = this.idelTasks[0];
      this.createServer((server) => {
        if(task) {
          server.assignTaskId(task.id);
          task.assignServer(server);
        }
      })
    }
  }
}
</script>
