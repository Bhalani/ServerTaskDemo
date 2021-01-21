<template>
  <v-list-item>
    <v-progress-linear v-model="task.progress" height="35">
      <strong> {{ task.id }} </strong>
      <v-spacer></v-spacer>
      <strong> Server {{ serverId }} </strong>
      <v-spacer></v-spacer>
      <strong> {{ Math.ceil(task.progress) }}% </strong>
    </v-progress-linear>
    <v-btn @click="deleteTask" v-if="canBeRemoved">
      <v-icon>
        fa-trash
      </v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    task: {
      typr: Object,
      required: true
    }
  },
  computed: {
    canBeRemoved() {
      return !this.task.startedAt
    },
    serverId() {
      return this.task.server ? this.task.server.id : null
    }
  },
  watch: {
    'task.progress'(val) {
      if(val === 100) {
        this.deleteTask();
        this.$emit("task-finished");
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['removeTask']),
    deleteTask() {
      this.removeTask(this.task);
    }
  }
}
</script>
