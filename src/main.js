import Vue from 'vue';
import App from '@/App.vue';

import vuex from '@/store';
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
    vuex,
    vuetify,
    render: h => h(App)
}).$mount('#app');
