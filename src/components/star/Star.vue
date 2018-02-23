<template>
    <div class="star" :class="starType">
        <span v-for="item in starClass" :class="item" class="star-item"></span>
    </div>
</template>
<script>
const LEN = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';
export default {
    props: {
        size: {
            type: Number
        },
        score: {
            type: Number
        }
    },
    computed: {
        starType() {
            return "star-" + this.size;
        },
        starClass() {
            let result = [];
            let score = Math.floor(this.score * 2) / 2;
            let hasDecimal = score % 1 !== 0;
            let integer = Math.floor(score);

            for(let i = 0; i < integer; i++){
                result.push(CLS_ON);
            }

            if(hasDecimal){
                result.push(CLS_HALF);
            }

            while(result.length < LEN) {
                result.push(CLS_OFF);
            }

            return result;
        }
    }
};
</script>

<style lang="scss">
@import "../../common/scss/mixins/mixins";
.star {
    font-size: 0;

    .star-item {
        display: inline-block;
        background-repeat: no-repeat;
    }

    &.star-24 {
        .star-item {
            width: 10px;
            height: 10px;
            margin-left: 3px;
            background-size: 10px 10px;
            &:first-child {
                margin-left: 0;
            }
            &.on {
                @include bg-img("../../../resource/img/star24_on");
            }
            &.half {
                @include bg-img("../../../resource/img/star24_half");
            }
            &.off {
                @include bg-img("../../../resource/img/star24_off");
            }
        }
    }
    &.star-36 {
        .star-item {
            width: 15px;
            height: 15px;
            margin-left: 6px;
            background-size: 15px 15px;
            &:first-child {
                margin-left: 0;
            }
            &.on {
                @include bg-img("../../../resource/img/star36_on");
            }
            &.half {
                @include bg-img("../../../resource/img/star36_half");
            }
            &.off {
                @include bg-img("../../../resource/img/star36_off");
            }
        }
    }
    &.star-48 {
        .star-item {
            width: 20px;
            height: 20px;
            margin-left: 22px;
            background-size: 20px 20px;
            &:first-child {
                margin-left: 0;
            }
            &.on {
                @include bg-img("../../../resource/img/star48_on");
            }
            &.half {
                @include bg-img("../../../resource/img/star48_half");
            }
            &.off {
                @include bg-img("../../../resource/img/star48_off");
            }
        }
    }
}

.aaa {
    height: 30px;
}
</style>


