import Vue from 'vue'

import bContainer from 'bootstrap-vue/es/components/layout/container'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron'
import bButton from 'bootstrap-vue/es/components/button/button'
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
import bNavbarT from 'bootstrap-vue/es/components/navbar/navbar-toggle'
import bNavbarB from 'bootstrap-vue/es/components/navbar/navbar-brand'
import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item'
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import bForm from 'bootstrap-vue/es/components/form/form'
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group'

Vue.component('b-container', bContainer);
Vue.component('b-col', bCol);
Vue.component('b-row', bRow);
Vue.component('b-jumbotron', bJumbotron);
Vue.component('b-btn', bButton);
Vue.component('b-navbar', bNavbar);
Vue.component('b-navbar-toggle', bNavbarT);
Vue.component('b-navbar-brand', bNavbarB);
Vue.component('b-navbar-nav', bNavbarNav);
Vue.component('b-nav-item', bNavItem);
Vue.component('b-collapse', bCollapse);
Vue.component('b-form', bForm);
Vue.component('b-form-group', bFormGroup);
Vue.component('b-form-input', bFormInput);