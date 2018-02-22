<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="avatar" width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <i class="icon" :class="classMap[seller.supports[0].type]"></i>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <i class="bulletin-icon"></i>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="bgblur">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>
        <div v-show="detailShow" class="detail">
            <div class="detail-wrapper">
                <div class="detail-main">
                    <h3 class="name">{{seller.name}}</h3>
                    <div class="star-wrapper">
                    <v-star :size="48" :score="seller.score"></v-star>
                    </div>
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close"></i>
            </div>
        </div>
    </div>
</template>
<script>
import star from "../star/Star";
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data() {
        return {
            detailShow: true
        };
    },
    methods: {
        showDetail() {
            this.detailShow = true;
        }
    },
    components: {
        "v-star": star
    },
    created() {
        this.classMap = [
            "decrease",
            "discount",
            "special",
            "invoice",
            "guarantee"
        ];
    }
};
</script>

<style lang="scss">
@import "../../common/scss/mixins/mixins";

.header {
    position: relative;
    background-color: rgba(7, 17, 27, 0.5);
    color: #fff;

    .content-wrapper {
        position: relative;
        padding: 24px 12px 18px 24px;
        font-size: 0;

        .avatar {
            display: inline-block;
            vertical-align: top;

            img {
                border-radius: 2px;
            }
        }

        .content {
            display: inline-block;
            margin-left: 16px;

            .title {
                margin: 2px 0 8px;

                .brand {
                    display: inline-block;
                    vertical-align: top;
                    width: 30px;
                    height: 18px;
                    @include bg-img("../../../resource/img/brand");
                    background-size: 30px 18px;
                    background-repeat: no-repeat;
                    border-radius: 2px;
                }

                .name {
                    margin-left: 6px;
                    font-size: 16px;
                    line-height: 18px;
                    font-weight: bold;
                }
            }

            .description {
                margin-bottom: 10px;
                line-height: 12px;
                font-size: 12px;
            }

            .support {
                position: relative;

                .icon {
                    display: inline-block;
                    vertical-align: top;
                    width: 12px;
                    height: 12px;
                    margin-right: 4px;
                    background-size: 12px 12px;

                    &.decrease {
                        @include bg-img("../../../resource/img/decrease_1");
                    }
                    &.discount {
                        @include bg-img("../../../resource/img/discount_1");
                    }
                    &.guarantee {
                        @include bg-img("../../../resource/img/guarantee_1");
                    }
                    &.invoice {
                        @include bg-img("../../../resource/img/invoice_1");
                    }
                    &.special {
                        @include bg-img("../../../resource/img/special_1");
                    }
                }

                .text {
                    font-size: 10px;
                    line-height: 1.4;
                }
            }
        }

        .support-count {
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 22px;
            line-height: 24px;
            border-radius: 14px;
            background-color: rgba(0, 0, 0, 0.2);
            text-align: center;

            .count {
                vertical-align: top;
                font-size: 10px;
            }

            .icon-keyboard_arrow_right {
                line-height: 24px;
                font-size: 10px;
            }
        }
    }

    .bulletin-wrapper {
        position: relative;
        padding: 0 22px 0 12px;
        height: 28px;
        line-height: 28px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: rgba(7, 17, 27, 0.2);

        .bulletin-icon {
            display: inline-block;
            width: 22px;
            height: 12px;
            @include bg-img("../../../resource/img/bulletin");
            background-size: 22px 12px;
            background-repeat: no-repeat;
            vertical-align: middle;
            margin-top: -2px;
        }

        .bulletin-text {
            margin-left: 2px;
            font-size: 10px;
            font-weight: 200;
            color: #fff;
            vertical-align: middle;
        }

        .icon-keyboard_arrow_right {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 10px;
        }
    }

    .bgblur {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        filter: blur(10px);
    }

    .detail {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(7, 17, 27, 0.8);

        .detail-wrapper {
            min-height: 100%;
            @include clearfix();

            .detail-main {
                padding: 64px 36px;

                .name {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 16px;
                    text-align: center;
                }

                .star-wrapper {
                    text-align: center;
                    margin-top: 16px;
                }
            }
        }

        .detail-close {
            position: relative;
            width: 32px;
            height: 32px;
            margin: -64px auto 0;
            clear: both;
            font-size: 32px;
        }
    }
}
</style>


