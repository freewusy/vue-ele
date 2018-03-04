<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item, index) in goods" class="menu-item" :class="{current: currentIndex === index}" @click="selectMenu(index, $event)">
                    <span class="text">
                        <i v-show="item.type>0" class="icon" :class="classMap[item.type]"></i>{{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foodWrapper">
            <ul>
                <li v-for="item in goods" class="food-list food-list-hook">
                    <h4 class="title">{{item.name}}</h4>
                    <ul>
                        <li v-for="food in item.foods" class="food-item">
                            <div class="icon">
                                <img width="57" height="57" :src="food.icon">
                            </div>
                            <div class="content">
                                <h5 class="name">{{food.name}}</h5>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}</span>
                                    <span>好评{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">
                                        <sub>￥</sub>{{food.price}}</span>
                                    <del class="old" v-show="food.oldPrice">
                                        <sub>￥</sub>{{food.oldPrice}}</del>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <showcart></showcart>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
import Showcart from "../showcart/Showcart"
export default {
    data() {
        return {
            goods: [],
            listHeight: [],
            scrollY: 0
        };
    },
    computed: {
        currentIndex() {
            for (let i = 0; i < this.listHeight.length; i++) {
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                if (
                    !height2 ||
                    (this.scrollY >= height1 && this.scrollY < height2)
                ) {
                    return i;
                }
            }
            return 0;
        }
    },
    created() {
        this.classMap = [
            "decrease",
            "discount",
            "special",
            "invoice",
            "guarantee"
        ];
        let self = this;
        this.$http
            .get("../../../static/data.json")
            .then(res => {
                self.goods = res.data.goods;
                self.$nextTick(() => {
                    self._initScroll();
                    self._calculateHeight();
                });
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        _initScroll() {
            this.menuScroll = new Bscroll(this.$refs.menuWrapper, {
                click: true
            });
            this.foodsScroll = new Bscroll(this.$refs.foodWrapper, {
                probeType: 3
            });
            this.foodsScroll.on("scroll", pos => {
                this.scrollY = Math.abs(Math.round(pos.y));
            });
        },
        _calculateHeight() {
            let foodList = this.$refs.foodWrapper.querySelectorAll(
                ".food-list-hook"
            );
            let height = 0;
            this.listHeight.push(height);

            for (let i = 0; i < foodList.length; i++) {
                let item = foodList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        },
        selectMenu(index, event) {
            if (!event._constructed) {
                return;
            }
            let foodList = this.$refs.foodWrapper.querySelectorAll(
                ".food-list-hook"
            );
            let el = foodList[index];
            this.foodsScroll.scrollToElement(el, 300);
        }
    },
    components: {
        Showcart
    }
};
</script>
<style lang="scss">
@import "../../common/scss/mixins/mixins.scss";
.goods {
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;

    .menu-wrapper {
        flex: 0 0 80px;
        width: 80px;
        background-color: #f3f5f7;

        .menu-item {
            display: table;
            width: 56px;
            height: 54px;
            padding: 0 12px;
            line-height: 14px;

            &.current {
                position: relative;
                z-index: 2;
                margin-top: -1px;
                background-color: #fff;

                .text {
                    font-weight: 700;
                    @include border-none();
                }
            }

            .text {
                display: table-cell;
                width: 56px;
                vertical-align: middle;
                font-size: 12px;
                font-weight: 200;
                @include border1px(rgba(7, 17, 27, 0.1));
            }

            .icon {
                display: inline-block;
                vertical-align: top;
                width: 12px;
                height: 12px;
                margin-right: 2px;
                background-size: 12px 12px;

                &.decrease {
                    @include bg-img("../../../resource/img/decrease_3");
                }
                &.discount {
                    @include bg-img("../../../resource/img/discount_3");
                }
                &.guarantee {
                    @include bg-img("../../../resource/img/guarantee_3");
                }
                &.invoice {
                    @include bg-img("../../../resource/img/invoice_3");
                }
                &.special {
                    @include bg-img("../../../resource/img/special_3");
                }
            }
        }
    }

    .foods-wrapper {
        flex: 1;

        .title {
            padding-left: 14px;
            height: 26px;
            line-height: 26px;
            border-left: 2px solid #d9dde1;
            font-size: 12px;
            color: rgb(147, 153, 159);
            background-color: #f3f5f7;
        }

        .food-item {
            display: flex;
            margin: 18px;
            padding-bottom: 18px;
            @include border1px(rgba(7, 17, 27, 0.1));

            &:last-child {
                @include border-none();
                margin-bottom: 0;
            }

            .icon {
                flex: 0 0 57px;
                margin-right: 10px;
            }

            .content {
                flex: 1;

                .name {
                    margin: 0 0 8px;
                    line-height: 16px;
                    font-size: 14px;
                    color: rgb(7, 17, 27);
                }

                .desc,
                .extra {
                    line-height: 10px;
                    font-size: 10px;
                    color: rgb(147, 153, 159);
                }

                .desc {
                    margin-bottom: 6px;
                    line-height: 12px;
                }

                .extra {
                    > .count {
                        margin-right: 12px;
                    }
                }

                .price {
                    line-height: 24px;
                    font-weight: normal;
                    font-size: 0;

                    .now {
                        margin-right: 8px;
                        font-size: 14px;
                        font-weight: 700;
                        color: rgb(240, 20, 20);
                    }

                    .old {
                        text-decoration: line-through;
                        font-size: 10px;
                        color: rgb(147, 153, 159);
                    }

                    .now,
                    .old {
                        sub {
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>

