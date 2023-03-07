export const state = () => ({
  user: { username: '' },
})

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
}

export const actions = {
  setUser({ commit }, payload) {
    commit('SET_USER', payload)
  },
  logout({ commit }) {
    commit('SET_USER', {
      username: '',
    })
  },
}
