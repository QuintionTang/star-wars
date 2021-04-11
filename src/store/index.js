import Vue from "vue";
import Vuex from "vuex";
import people from "./modules/people";
import planets from "./modules/planets";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        people: people, // 这种方式是可以重命名模块名称
        planets,
    },
});

export default store;
