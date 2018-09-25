export default {
  state: {
    storeMessage: "message du store"
  },

  mutations: {},

  actions: {},

  getters: {
    getMessage(state) {
      return state.storeMessage;
    }
  }
};
