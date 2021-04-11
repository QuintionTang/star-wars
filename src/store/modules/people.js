import * as services from "@/services";
import { nanoid } from "nanoid";
const state = {
    people: [],
};
const mutations = {
    setPeople(state, payload) {
        state.people = [...payload];
    },
};
const actions = {
    getPeople({ commit }, { success, fail } = {}) {
        services.getPeople(
            (response) => {
                commit(
                    "setPeople",
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
    male(state) {
        return state.people.filter((person) => person.gender === "male") || [];
    },
    female(state) {
        return (
            state.people.filter((person) => person.gender === "female") || []
        );
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
