const state = () => {
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
    ];
};

const getters = {
    items: state => state.items
};

export default {
    namespaced: true,
    state,
    getters
};
