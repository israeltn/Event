import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

createApp(App)
.use(store)
.use(router)
.use(VueLoading)
.use(VueAxios, axios)
.use(Toast)
.mount("#app");
