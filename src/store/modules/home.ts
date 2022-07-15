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
        // 变更状态
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
