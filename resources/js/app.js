require("./bootstrap");

import router from "./router";
import store from "./store";

import Vue from 'vue'

import VModal from 'vue-js-modal'

//Sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});

window.Toast = Toast;

//Import v-from
import { Form } from 'vform'
window.Form = Form;


window.Vue = require("vue").default;
Vue.use(VModal)
Vue.component("app", require("./App.vue").default);

const app = new Vue({
    router,
    store,
    el: "#app"
});
