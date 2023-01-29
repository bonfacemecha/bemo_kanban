require("./bootstrap");

import router from "./router";
import store from "./store";

import Vue from 'vue'

import VModal from 'vue-js-modal'


window.Vue = require("vue").default;
Vue.use(VModal)
Vue.component("app", require("./App.vue").default);

const app = new Vue({
    router,
    store,
    el: "#app"
});
