<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="main">
            <div class="line">
            </div>
            <div class="top">
                <div class="cell">
                    <span class="cell-span">计划网址:</span>
                    <label class="cell-label">sadasd</label>
                    <img class="cell-img" src="../../static/images/share/Share-06.png" alt="">
                </div>
                <div class="line">
                </div>
                <div class="cell">
                    <span class="cell-span">计划密码:</span>
                    <label class="cell-label1">sadasd</label>
                    <img class="cell-img" src="../../static/images/share/Share-07.png" alt="">
                </div>
                <div class="line">
                </div>
                <div class="cell">
                    <span class="cell-span">团队名称:</span>
                    <label class="cell-label1">sadasd</label>
                    <img class="cell-img" src="../../static/images/share/Share-07.png" alt="">
                </div>
                <div class="line">
                </div>
                <div class="cell">
                    <span class="cell-span">联系方式:</span>
                    <label class="cell-label2">sadasd</label>
                    <img class="cell-icon" src="../../static/images/share/Share-08.png" alt="">
                    <img class="cell-icon1" src="../../static/images/share/Share-10.png" alt="">
                    <img class="cell-img" src="../../static/images/share/Share-07.png" alt="">
                </div>
                <div class="line">
                </div>
            </div>
            <div class="bottom">
                <button class="bottom-btn" @click="shareClick">发布计划</button>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    display: flex;
    flex-direction: column;
    .line {
        background: #F3F4F5;
        height: 15px;
    }
    .top {
        display: flex;
        flex-direction: column;
        .cell {
            display: flex;
            flex-direction: row;
            height: 60px;
            line-height: 60px;
            .cell-span {
                width: 25%;
            }
            .cell-label {
                width: 60%;
                height: 40px;
                text-align: left;
                color: blue;
            }
            .cell-label1 {
                width: 60%;
                height: 40px;
                text-align: left;
            }
            .cell-label2 {
                width: 47%;
                height: 40px;
                text-align: left;
            }
            .cell-img {
                margin-top: 10px;
                height: 40px;
                width: 40px;
            }
            .cell-icon {
                margin-top: 10px;
                margin-right: -5px;
                height: 40px;
                width: 40px;
            }
            .cell-icon1 {
                margin-top: 30px;
                margin-left: -5px;
                height: 20px;
                width: 20px;
            }
        }
    }
    .bottom {
        width: 100%;
        position: fixed;
        bottom: 10px;
        height: 40px;
        display: flex;
        justify-content: center;
        .bottom-btn {
            margin-bottom: 20px;
            width: 50%;
            height: 40px;
            border-radius: 20px;
            line-height: 35px;
            background-color: rgb(229, 87, 77);
            border-color: rgba(0, 0, 0, 0);
            color: #fff;
        }
    }
}
</style>

<script>
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '计划分享',
                showBack: true,
                right: false,
            },
        };
    },
    components: {
        mHeader,
    },
    methods:{
        shareClick(){

        }
    },
}
</script>
