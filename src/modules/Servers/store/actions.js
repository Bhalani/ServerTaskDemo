import Server from '@/models/Server';

const createServer = ({commit}, callback) => {
  let server = new Server()
  commit("ADD_SERVER", server);
  callback(server)
}

const destroyFreeServers = ({state}) => {
  state.availableServers = state.availableServers.filter(server => {
    console.log(server)
    return !!server.taskId
  })
}

export default {
  createServer,
  destroyFreeServers
};
