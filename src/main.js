import App from './App.vue'
import Vue from 'vue'
import vSelect from 'vue-select'
import './components/imports/bootstrap'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import router from './router'

Vue.component('v-select', vSelect);

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faAngleDown);

Vue.config.productionTip = false;

Vue.mixin({
    data: function () {
        return {
            JAFA_SERVER: 'https://jafa-server.herokuapp.com/jafa/api/',
            AUTHORIZATION: 'Bearer ' + localStorage.token
        }
    }
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
