const state = () => ({
    idForItem: 4,

    items: [
        {
            id: 1,
            word: 'heater shield',
            translation: 'tarcza trójkątna',
            notes: '',
            completed: false
        },
        {
            id: 2,
            word: 'longsword',
            translation: 'miecz długi',
            notes: '',
            completed: false
        },
        {
            id: 3,
            word: 'mace',
            translation: 'buzdygan',
            notes: '',
            completed: false
        }
    ]
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
