<template>
    <div >
        <m-header :title="title"></m-header>
        <div class="main">
            <div class="top">
                <p>
                    彩软科技创建于2017年初，旗下拥有赢彩王系列彩票分析软件及app，是互联网彩票分析领域的创新者，领导者。
                </p>
                <p>
                    赢彩王系列软件拥有超级丰富的计划库，提供超强计划追号、云端计划管理、多平台一致的使用体验等前瞻性功能。
                </p>
                <p>
                    我们将以先进的技术和完善的服务为中国福利彩票事业贡献自己的力量。
                </p>
            </div>

            <div class="bottom">
                <span>官方网站：</span>
                <el-button type="text" style="color:blue" @click="urlClick">{{OfficialUrl}}</el-button>
                <p>版权所有：深圳市彩软科技有限公司</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    background-image: url(../../../static/images/About-01.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 90%;
    position: absolute;
}
.top {

    font-size: 15px;
    margin-top: 45%;
    margin-left: 15%;
    margin-right: 15%; // margin-bottom: 5%;
    p {
        text-align: left;
        text-indent: 2em;
        padding-bottom: 10px;
    }
}

.bottom {
    font-size: 13px;
    margin-top: 25%;
    margin-left: 15%;
    margin-right: 15%;
}

</style>

<script>
import mHeader from '../../components/hearder/Hearder';
import sha256 from '../../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '关于我们',
                showBack: true,
            },
            OfficialUrl : localStorage.OfficialUrl,
        };
    },
    components: {
        mHeader,
    },
    methods: {
        urlClick() {
            window.location.href = 'http://ycw.cpnet.com';
        }
    }
}
</script>
