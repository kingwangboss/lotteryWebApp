<template>
    <div>
        <m-header :title="title"></m-header>

        <div class="maincontainer">
            <div class="content">
                <img src="../../static/images/login/topLog.png" alt="icon">

                <input type="text">
                <input type="text">
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
.maincontainer {
    background-image: url('../../static/images/login/Loginbg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    .content {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        flex-direction: column;
        img {
            width: 120px;
            height: 80px;
            margin-top: 10%;
        }
        input {
            margin-top:10%;
        }
    }
}
</style>

<script>
import mHeader from '../components/hearder/Hearder';

export default {
    name: 'loginVC',
    data() {
        return {
            title: {
                text: '登陆',
                tabName: 'loginVC',
                tabClass: 'loginVC',
            }
        };
    },
    components: {
        mHeader
    },
    activated() {
        document.body.className = 'main-body';
    },
    methods: {
        btnclick() {
            console.log("push")
            this.$router.push({
                path: '/regist'
            })
        },
    }
}
</script>

