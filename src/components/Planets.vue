<template>
    <div class="container">
        <div class="" v-if="!loading">
            <h2 class="title">所有行星</h2>

            <dl v-for="(planet, idx) in planets" :key="idx" class="item">
                <dt>
                    {{ idx + 1 }}
                </dt>
                <dd>
                    {{ planet.name }}
                </dd>
                <dd class="right">
                    {{ planet.population }}
                </dd>
            </dl>

            <h2 class="title">人口庞大</h2>

            <dl
                v-for="(planet, idx) in largePopulation"
                :key="planet.uuid"
                class="item"
            >
                <dt>
                    {{ idx + 1 }}
                </dt>
                <dd>
                    {{ planet.name }}
                </dd>
                <dd class="right">
                    {{ planet.population }}
                </dd>
            </dl>

            <h2 class="title">人口少的</h2>
            <dl
                v-for="(planet, idx) in smallPopulation"
                :key="planet.uuid"
                class="item"
            >
                <dt>
                    {{ idx + 1 }}
                </dt>
                <dd>
                    {{ planet.name }}
                </dd>
                <dd class="right">
                    {{ planet.population }}
                </dd>
            </dl>
        </div>
        <Loading v-show="loading" />
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
const Loading = () => import("./Loading");
export default {
    name: "Planets",
    data() {
        return {
            loading: false,
        };
    },
    components: {
        Loading,
    },
    created() {
        this.getPlanetsAction();
    },
    computed: {
        ...mapState("planets", ["planets"]),
        ...mapGetters("planets", ["largePopulation", "smallPopulation"]),
    },
    methods: {
        ...mapActions("planets", ["getPlanets"]),
        handleSuccess() {
            this.loading = false;
            console.log("success fetch data");
        },
        handleFail() {
            this.loading = false;
            console.log("failed fetch data");
        },
        getPlanetsAction() {
            this.getPlanets({
                success: this.handleSuccess,
                fail: this.handleFail,
            });
        },
    },
};
</script>
