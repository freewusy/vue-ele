<template>
    <div id="app">
        <v-header :seller="seller"></v-header>
        <v-tab></v-tab>
        <div class="content">
            <keep-alive>
                <router-view :seller="seller"></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import header from "@/components/header/Header";
import tab from "@/components/menu/Tab";
import { urlParse } from "./common/js/util";

export default {
    data() {
        return {
            seller: {
                id: (() => {
                    let queryParam = urlParse();
                    return queryParam.id;
                })()
            }
        };
    },
    components: {
        "v-header": header,
        "v-tab": tab
    },
    created() {
        let self = this;
        this.$http
            .get("./api/seller?id=" + this.seller.id)
            .then(res => {
                //这里不应该是这样获取id，只是为了测试才这样写
                if (res.data.errno === 0) {
                    self.seller = Object.assign({}, self.seller, res.data.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
};
</script>

<style>

</style>
