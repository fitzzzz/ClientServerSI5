import App from './App.vue'
import Vue from 'vue'
import vSelect from 'vue-select'
import './components/imports/bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

Vue.component('v-select', vSelect);
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faAngleDown);

Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
