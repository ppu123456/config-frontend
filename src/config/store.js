import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: {
            uid: '123',
            name: 'Usuário Mock',
            email: 'mock@email.com'
        }
    },
    getters: {},
    mutations: {},
    actions: {}
})

export default store