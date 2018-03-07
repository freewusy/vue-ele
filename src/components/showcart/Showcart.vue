<template>
    <div class="showcart">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo">
                        <span class="icon-shopping_cart"></span>
                    </div>
                </div>
                <div class="price">￥0</div>
                <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay">￥{{minPrice}}元起送</div>
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
                    height: 100;
                    border-radius: 50%;
                    text-align: center;
                    background-color: #2b343c;

                    .icon-shopping_cart {
                        line-height: 44px;
                        font-size: 24px;
                        color: #80858a;
                    }
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
            background-color: #2b333b;

            .pay {
                height: 48px;
                line-height: 48px;
                text-align: center;
                font-size: 12px;
                font-weight: 700;
                color: rgba(255, 255, 255, 0.4);
            }
        }
    }
}
</style>
