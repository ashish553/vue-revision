export const state = () => {
    return {
        count: 0
    }
}

export const mutations = {
    increase: (state) => {
        // console.log('payload from mutation', payload);
        
        state.count++
    },
    decrease: (state) => {
        state.count--
    }
}

export const actions = {
    increase: ({commit}, payload) => {
        // console.log('payload', payload);
        commit('increase', payload)
    },
    decrease: ({commit}) => {
        // console.log('payload', payload);
        commit('decrease')
    },
}