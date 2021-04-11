<template>
    <div id="app">
        <div class="tabs">
            <div
                :class="['tab', { selected: isPeople }]"
                @click="changeTab('PEOPLE')"
            >
                人物
            </div>
            <div
                :class="['tab', { selected: isPlanets }]"
                @click="changeTab('PLANETS')"
            >
                行星
            </div>
        </div>
        <People v-if="isPeople" />
        <Planets v-if="isPlanets" />
    </div>
</template>

<script>
const People = () => import("./components/People");
const Planets = () => import("./components/Planets");
export default {
    name: "App",
    data() {
        return {
            selectedTab: "PEOPLE",
        };
    },
    components: {
        People,
        Planets,
    },
    computed: {
        isPeople() {
            return this.selectedTab === "PEOPLE";
        },
        isPlanets() {
            return this.selectedTab === "PLANETS";
        },
    },
    methods: {
        changeTab(value) {
            this.selectedTab = value;
        },
    },
};
</script>
