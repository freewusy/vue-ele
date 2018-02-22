<template>
    <div class="tab border1px">
        <div class="tab-item">
            <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/seller">商家</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../common/scss/mixins/mixins.scss";

.tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
}

.tab-item {
    flex: 1;
    text-align: center;
}

.tab-item > a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
}

a.active {
    color: rgb(240, 20, 20);
}

.border1px {
    @include border1px(rgba(7,17,27,0.1));
}

/* @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
    .border1px::after {
        -webkit-transform: scaleY(0.7);
        transform: scaleY(0.7);
    }
}

@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    .border1px::after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
} */
</style>
