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

const mutations = {};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
