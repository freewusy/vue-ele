<template>
    <div id="app">
        <v-header :seller="seller"></v-header>
        <v-tab></v-tab>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import header from "@/components/header/Header";
import tab from "@/components/menu/Tab";

export default {
    data() {
        return {
            seller: {}
        };
    },
    components: {
        "v-header": header,
        "v-tab": tab
    },
    created() {
        let self = this;
        this.$http.get('../../../static/data.json').then((res) => {
            self.seller = res.data.seller;
        }).catch((err) => {
            console.log(err);
        })
    }
};
</script>

<style>

</style>
