import Task from '@/models/Task';

const addTasks = ({commit}, { numberOfTasks, callback }) => {
  for (let step = 0; step < numberOfTasks; step++) {
    let task =  new Task()
    commit("ADD_TASK", task);
    callback(task);
  }
}

const assignToServer = (_, { task, server }) => {
  server.assignTask(task.id);
  task.assignServer(server);
}

const removeTask = ({commit}, task) => {
  commit("REMOVE_TASK", task)
}

export default {
  addTasks,
  removeTask,
  assignToServer
};
