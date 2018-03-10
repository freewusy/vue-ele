<template>
    <div class="showcart">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{highlight: totalCount > 0}">
                        <span class="icon-shopping_cart"></span>
                    </div>
                    <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
                </div>
                <div class="price" :class="{highlight: totalPrice > 0}">￥{{totalPrice}}</div>
                <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay" :class="payClass">{{payDesc}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        minPrice: {
            type: Number,
            default: 0
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        selectFoods: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.selectFoods.forEach((food) => {
                total += food.price * food.count;
            });
            return total;
        },
        totalCount() {
            let count = 0;
            this.selectFoods.forEach((food) => {
                count += food.count;
            })
            return count;
        },
        payDesc() {
            if(this.totalPrice === 0) {
                return `￥${this.minPrice}元起送`;
            }else if(this.totalPrice < this.minPrice) {
                return `还差￥${this.minPrice - this.totalPrice}元起送`;
            }else {
               return '去结算';
            }
        },
        payClass() {
            let className = this.minPrice > this.totalPrice ? 'no-enough' : 'enough';
            return className;
        }
    }
}
</script>
<style lang="scss">
.showcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;

    .content {
        display: flex;
        background-color: #141d27;
        font-size: 0;

        .content-left {
            flex: 1;

            .logo-wrapper,
            .price,
            .desc {
                display: inline-block;
            }

            .logo-wrapper {
                position: relative;
                top: -10px;
                margin: 0 12px;
                padding: 6px;
                width: 56px;
                height: 56px;
                box-sizing: border-box;
                vertical-align: top;
                border-radius: 50%;
                background-color: #141d27;

                .logo {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    text-align: center;
                    background-color: #2b343c;

                    &.highlight {
                        background: rgb(0, 160, 220);

                        .icon-shopping_cart {
                            color: #fff;
                        }
                    }

                    .icon-shopping_cart {
                        line-height: 44px;
                        font-size: 24px;
                        color: #80858a;
                    }
                }

                .num {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 24px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    border-radius: 16px;
                    font-size: 9px;
                    font-weight: 700;
                    color: #fff;
                    background-color: rgb(240, 20, 20);
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
                }
            }

            .price {
                vertical-align: top;
                margin-top: 12px;
                padding-right: 12px;
                line-height: 24px;
                font-size: 16px;
                color: rgba(255, 255, 255, 0.4);
                font-weight: 700;
                border-right: 1px solid rgba(255, 255, 255, 0.1);

                &.highlight {
                    color: #fff;
                }
            }

            .desc {
                display: inline-block;
                vertical-align: top;
                margin-top: 12px;
                margin-left: 12px;
                line-height: 24px;
                font-size: 10px;
                color: rgba(255, 255, 255, 0.4);
            }
             
        }

        .content-right {
            flex: 0 0 105px;
            width: 105px;            

            .pay {
                height: 48px;
                line-height: 48px;
                text-align: center;
                font-size: 12px;
                font-weight: 700;

                &.no-enough {
                    color: rgba(255, 255, 255, 0.4);
                    background-color: #2b333b;
                }
                &.enough {
                    color: #fff;
                    background-color: #00b43c;
                }
            }
        }
    }
}
</style>
