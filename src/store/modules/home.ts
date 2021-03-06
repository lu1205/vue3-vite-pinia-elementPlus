// initial state
const state = {
    num: 0
}

// getters
const getters = {
}

// actions
const actions = {
    increment (context:any) {
        context.commit('increment')
    }
}

// mutations
const mutations = {
    increment (state:any) {
        // εζ΄ηΆζ
        state.num++
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
