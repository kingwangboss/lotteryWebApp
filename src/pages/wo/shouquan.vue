<template>
    <div>
        <m-header :title="title"></m-header>
        <div class="maincontainer">
            <div class="weui_cell" style="margin-top:20rpx;">
                <span class="tv_cell_left">版本</span>
                <span class="tv_cell_right">{{listData.AuthTitle}}</span>
                <div class="iv-arrow"></div>
            </div>
            <div class="weui_cell" style="margin-top:20rpx;">
                <span class="tv_cell_left">有效时间</span>
                <span class="tv_cell_right">{{listData.AuthExpiration === null ? "" :listData.AuthExpiration }}</span>
                <div class="iv-arrow"></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.maincontainer {
    display: flex;
    flex-direction: column;
}

.weui_cell {
    position: relative;
    display: flex;
    padding: 25px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #dadada;
    background-color: white;
}

.tv_cell_left {
    position: absolute;
    font-size: 15px;
    color: #333;
    left: 10px;
}

.tv_cell_right {
    position: absolute;
    font-size: 14px;
    color: #999999;
    right: 40px;
}

.iv-arrow {
    position: absolute;
    right: 15px;
    border-top: 1px solid #c7c7c7;
    border-right: 1px solid #c7c7c7;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
</style>

<script>
import mHeader from '../../components/hearder/Hearder';
import sha256 from '../../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '我的授权',
                showBack: true,
            },
           listData:'',
        };
    },
    components: {
        mHeader,
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()

    },
    methods:{
        getData(){
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetAuthInfo' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetAuthInfo');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());

            this.$http.post(localStorage.SiteUrl, data).then(res => {

                this.listData = res.data.Data
                
            }).catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
