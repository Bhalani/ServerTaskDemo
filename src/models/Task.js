let Task = class {
  constructor() {
    this.id = Math.random().toString(36).substring(7);
    this.startedAt = null;
    this.serverId = null;
    this.taskInterval = null;
    this.progress = 0;
  }

  isIdle() {
    return !this.startedAt;
  }

  assignServer(server) {
    this.server = server;
    this.startExecution();
  }

  startExecution() {
    let vm = this;
    this.startedAt = Date.now();
    this.taskInterval = setInterval(function() {
      vm.progress = vm.progress + 1;
      if(vm.progress === 100) {
        clearInterval(vm.taskInterval);
        vm.taskInterval = null;
        vm.server.unassignTask();
        return 0;
      }
    }, 200);
  }
}

export default Task;
window.Task = Task;
