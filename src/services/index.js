import apiClient from "@/api";

const getPeople = (success, fail) => {
    apiClient
        .get("people")
        .then((response) => success(response))
        .catch((response) => fail(response));
};

const getPlanets = (success, fail) => {
    apiClient
        .get("planets")
        .then((response) => success(response))
        .catch((response) => fail(response));
};

export { getPeople, getPlanets };
