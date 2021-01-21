const Server = class {
  constructor() {
    this.id = Math.random().toString(36).substring(7);
    this.taskId = null;
  }

  get status() {
    return !this.taskId ? 'Free' : 'Occupied'
  }

  assignTaskId(taskId) {
    this.taskId = taskId;
  }

  unassignTask() {
    this.taskId = null;
  }
}

export default Server;
