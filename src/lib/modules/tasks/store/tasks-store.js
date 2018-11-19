export default {
  state: {
    language: "fr"
  },

  mutations: {
    mutateLanguage(state, language) {
      state.language = language;
    }
  },

  actions: {},

  getters: {
    getLanguage(state) {
      return state.language;
    }
  }
};
