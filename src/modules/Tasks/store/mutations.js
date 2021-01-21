
const ADD_TASK = (state, task) => {
  state.tasks.push(task);
};

const REMOVE_TASK = (state, task) => {
  state.tasks = state.tasks.filter(t => {
    return t.id !== task.id;
  })
}

export default {
  ADD_TASK,
  REMOVE_TASK
};
