<template>
  <v-card>
    <div class="task-form">
      <v-text-field hide-details type="number" min='1' v-model="numberOfTasks"></v-text-field>
      <v-btn @click="createTasks">
        Add Task{{numberOfTasks > 1 ? 's' : ''}}
      </v-btn>
    </div>
    <v-list v-for="task in tasks" :key="task.id">
      <task :task="task" @task-finished="taskFinishCallback" />
    </v-list>
  </v-card>
</template>

<script>
import Task from "./components/task";
import { mapActions, mapState } from "vuex";

export default {
  name: "Tasks",
  data() {
    return {
      numberOfTasks: 1
    }
  },
  components: {
    Task
  },
  computed: {
    ...mapState('tasks', ["tasks"]),
    ...mapState("servers", ["availableServers"]),
    idelServers() {
      return this.availableServers.filter(server => {
        return !server.taskId;
      })
    },
    idelTasks() {
      return this.tasks.filter( task => {
        return task.isIdle()
      })
    }
  },
  methods: {
    ...mapActions('tasks', ['addTasks']),
    createTasks() {
      this.addTasks({
        numberOfTasks: this.numberOfTasks,
        callback: task => {
          this.assignToFreeServer(task)
        }
      });
    },
    taskFinishCallback() {
      let task = this.idelTasks[0];
      if(task) {
        this.assignToFreeServer(task);
      }
    },
    assignToFreeServer(task) {
      let server = this.idelServers[0]
      if(server) {
        server.assignTaskId(task.id);
        task.assignServer(server);
      }
      this.numberOfTasks = 1;
    }
  }
}
</script>
