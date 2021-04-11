<template>
    <div class="container">
        <div class="" v-if="!loading">
            <h2 class="title">所有人物</h2>
            <dl v-for="(person, idx) in people" :key="idx" class="item">
                <dt>{{ idx + 1 }}</dt>
                <dd>{{ person.name }}</dd>
                <dd class="right">{{ person.gender }}</dd>
            </dl>
            <h2 class="title">男性</h2>
            <dl v-for="(person, idx) in male" :key="person.uuid" class="item">
                <dt>{{ idx + 1 }}</dt>
                <dd>{{ person.name }}</dd>
                <dd class="right">{{ person.gender }}</dd>
            </dl>

            <h2 class="title">女性</h2>
            <dl v-for="(person, idx) in female" :key="person.uuid" class="item">
                <dt>{{ idx + 1 }}</dt>
                <dd>{{ person.name }}</dd>
                <dd class="right">{{ person.gender }}</dd>
            </dl>
        </div>
        <Loading v-show="loading" />
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

const Loading = () => import("./Loading");

export default {
    name: "People",
    data() {
        return {
            loading: false,
        };
    },
    components: {
        Loading,
    },
    created() {
        this.loading = true;
        this.getPeopleAction();
    },
    computed: {
        ...mapState("people", ["people"]),
        ...mapGetters("people", ["male", "female"]),
    },
    methods: {
        ...mapActions("people", ["getPeople"]), // 如果需要是多个namespace的方法，在下面在写一行
        // ...mapActions("planets", ["getPlanets"]),  // 此处为星球模块
        handleSuccess() {
            this.loading = false;
            console.log("success fetch data");
        },
        handleFail() {
            this.loading = false;
            console.log("failed fetch data");
        },
        getPeopleAction() {
            this.getPeople({
                success: this.handleSuccess,
                fail: this.handleFail,
            });
            // 下面注释的代码为优化前的调用方式
            // this.$store.dispatch("people/getPeople", {
            //     success: this.handleSuccess,
            //     fail: this.handleFail,
            // });
        },
    },
};
</script>
