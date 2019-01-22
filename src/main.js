import App from './App.vue'
import Vue from 'vue'
import vSelect from 'vue-select'
import './components/bootstrap'

import router from './router'

Vue.component('v-select', vSelect);
Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
