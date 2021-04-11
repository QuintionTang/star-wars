import * as services from "@/services";
import { nanoid } from "nanoid";

const state = {
    planets: [],
};
const mutations = {
    setPlanets(state, payload) {
        state.planets = [...payload];
    },
};
const actions = {
    getPlanets({ commit }, { success, fail } = {}) {
        services.getPlanets(
            (response) => {
                commit(
                    "setPlanets",
                    response.data.results.map((item) => {
                        item.uuid = nanoid(); // 避免key异常
                        return item;
                    })
                );
                success && success(response);
            },
            (response) => {
                fail && fail(response);
            }
        );
    },
};
const getters = {
    largePopulation(state) {
        return state.planets.filter((planet) => planet.population > 1000);
    },
    smallPopulation(state) {
        return state.planets.filter((planet) => planet.population <= 1000);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
