import Vue from 'vue';
import Vuex from 'vuex';

import words from '@/store/modules/words';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        words
    }
});
