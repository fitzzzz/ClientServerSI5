import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect);
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
    render: h => h(App),
}).$mount('#app');
