import { createStore } from 'vuex'

export default createStore({
  state: {
    status: '',
    users:[]
  },
  mutations: {
    isLoading (state) {
      state.status = 'loading'
    },
    get_success (state, data) {
      state.status = 'success'
      state.users = data
    },
  },
  actions: {
  },
  getters: {
    users: state=> state.users,
    status: state=> state.status
  }
})
