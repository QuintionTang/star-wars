import Vue from "vue";
import VuePageTitle from "vue-page-title";
import App from "./App.vue";
import store from "./store";
import "./global.scss";

Vue.config.productionTip = false;

Vue.use(VuePageTitle, {
    prefix: "Star-Wars Three | ",
});

new Vue({
    render: (h) => h(App),
    store,
}).$mount("#app");
