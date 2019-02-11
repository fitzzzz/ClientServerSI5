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
import bFormInvalidFeedback from 'bootstrap-vue/es/components/form/form-invalid-feedback'
import bProgress from 'bootstrap-vue/es/components/progress/progress';
import bNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown';
import bDropdown from 'bootstrap-vue/es/components/dropdown/dropdown';
import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item';
import vBModal from 'bootstrap-vue/es/directives/modal/modal';
import bModal from 'bootstrap-vue/es/components/modal/modal';
import bAlert from 'bootstrap-vue/es/components/alert/alert';
import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item';
import bListGroup from 'bootstrap-vue/es/components/list-group/list-group';
import bPaginationNav from 'bootstrap-vue/es/components/pagination-nav/pagination-nav';
import bInput from 'bootstrap-vue/es/components/form-input/form-input'
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select';
import bBadge from 'bootstrap-vue/es/components/badge/badge';
import bFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea';
import bPopover from 'bootstrap-vue/es/components/popover/popover';
import bNav from 'bootstrap-vue/es/components/nav/nav';

Vue.component('b-nav', bNav);
Vue.component('b-popover', bPopover);
Vue.component('b-form-textarea', bFormTextarea);
Vue.component('b-badge', bBadge);
Vue.component('b-form-select', bFormSelect);
Vue.component('b-input', bInput);
Vue.component('b-pagination-nav', bPaginationNav);
Vue.component('b-list-group', bListGroup);
Vue.component('b-list-group-item', bListGroupItem);
Vue.component('b-alert', bAlert);
Vue.component('b-modal', bModal);
Vue.component('b-progress', bProgress);
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
Vue.component('b-form-invalid-feedback', bFormInvalidFeedback);
Vue.component('b-progress', bProgress);
Vue.component('b-nav-item-dropdown', bNavItemDropdown);
Vue.component('b-dropdown-item', bDropdownItem);
Vue.component('b-dropdown', bDropdown);

Vue.directive('b-modal', vBModal);
