<template>
    <div class="header-wrapper">
        <div class="header">
            <div class="title-wrapper">
                <span v-if="title.showBack" class="back" @click="back">
                    <img src="../../../static/images/back.png" alt="返回" />
                </span>

                <span v-if="title.showQH" class="back" @click="qhCaizhong">
                    <img src="../../../static/images/left-qh.png" alt="" />
                </span>
                <!-- <span class="title">{{title.text}}</span> -->
                <span class="title">{{title.text}}</span>

                <span v-if="title.right" class="right" @click="right">
                    <img src="../../../static/images/sousuobtn.png" alt="搜索" />
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.header-wrapper {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    .header {
        height: 44px;
        background-color: #E5574D;
        line-height: 44px;
        text-align: center;

        .title-wrapper {
            font-size: 15px;
            color: #FCFCFC;
            span {
                display: inline-block;
            }
            .title {
                width: 74%;
                font-weight: 500;
            }
            .back {
                width: 12%;
                margin-left: -40px;
                img {
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    vertical-align: middle;
                    padding: 3px;
                }
            }
            .right {
                width: 12%; 
                margin-right: -40px;
                img {
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    vertical-align: middle;
                    padding: 3px;
                }
            }
        }
    }
}
</style>


<script>
export default {
    props: {
        title: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        right() {
            this.$router.push('/planVC/planDetail/setParameter')
        },
        qhCaizhong(){
            this.$router.push('/XZcaizhong')
        }
    },
}
</script>