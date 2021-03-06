const state = () => ({
    idForItem: 1,

    items: []
});

const getters = {
    items: state => state.items,

    idForItem: state => state.idForItem
};

const mutations = {
    STORE_WORD(state, item) {
        state.items.push(item);
    },

    UPDATE_WORD(state, word) {
        const index = state.items.findIndex(item => item.id === word.id);

        if (~index) {
            state.items.splice(index, 1, word);
        }
    },

    DESTROY_WORD(state, id) {
        const index = state.items.findIndex(item => item.id === id);

        if (~index) {
            state.items.splice(index, 1);
        }
    },

    INCREMENT_ID(state) {
        state.idForItem++;
    }
};

const actions = {
    store({ commit }, data) {
        commit('STORE_WORD', data);
        commit('INCREMENT_ID');
    },

    update({ commit }, data) {
        commit('UPDATE_WORD', data);
    },

    destroy({ commit }, id) {
        commit('DESTROY_WORD', id);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
