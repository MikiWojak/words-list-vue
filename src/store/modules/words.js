const state = () => ({
    items: [
        {
            word: 'shield',
            translation: 'tarcza',
            notes: '',
            completed: false
        },
        {
            word: 'shield',
            translation: 'tarcza',
            notes: '',
            completed: false
        },
        {
            word: 'shield',
            translation: 'tarcza',
            notes: '',
            completed: false
        },
        {
            word: 'shield',
            translation: 'tarcza',
            notes: '',
            completed: false
        },
        {
            word: 'shield',
            translation: 'tarcza',
            notes: '',
            completed: false
        }
    ]
});

const getters = {
    items: state => state.items
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
