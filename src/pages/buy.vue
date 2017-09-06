<template>
    <div style="overflow:hidden">
        <m-header :title="title"></m-header>
        <div class="rectangle">
            <div>
                <div class="top">
                    <div style="font-size:15px;color:#58C5E0;font-weight:900">标准版一年授权</div>
                    <div style="font-size:15px;color:#AED6E0;font-weight:900;text-decoration:line-through">￥280.00</div>
                    <div style="font-size:15px;color:#58C5E0;font-weight:900">￥280.00</div>
                    <el-button>购买</el-button>
                </div>
                <div class="line">
                </div>
                <p style="color:#58C5E0">包含计划追号、更改计划、公司切换、公式搜索等常用功能</p>
            </div>
        </div>

         <div class="rectangle">
            <div>
                <div class="top">
                    <div style="font-size:15px;color:#58C5E0;font-weight:900">标准版一年授权</div>
                    <div style="font-size:15px;color:#AED6E0;font-weight:900;text-decoration:line-through">￥280.00</div>
                    <div style="font-size:15px;color:#58C5E0;font-weight:900">￥280.00</div>
                    <el-button>购买</el-button>
                </div>
                <div class="line">
                </div>
                <p style="color:#58C5E0">包含计划追号、更改计划、公司切换、公式搜索等常用功能</p>
            </div>
        </div>

         <div class="rectangle">
            <div>
                <div class="top">
                    <div style="font-size:15px;color:#58C5E0;font-weight:900">标准版一年授权</div>
                    <div style="font-size:15px;color:#AED6E0;font-weight:900;text-decoration:line-through">￥280.00</div>
                    <div style="font-size:15px;color:#58C5E0;font-weight:900">￥280.00</div>
                    <el-button>购买</el-button>
                </div>
                <div class="line">
                </div>
                <p style="color:#58C5E0">包含计划追号、更改计划、公司切换、公式搜索等常用功能</p>
            </div>
        </div>

    </div>
</template>

<style lang="less">
.rectangle {
    margin: 20px 5px;
    background-image: url('../../static/images/Pruchase/Pruchase-06.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    .top {
        margin-left: 10px;
        height: 62px;
        line-height: 62px;
        display: flex;
        flex-direction: row;
        align-items: center;
        div {
            margin-left: 10px;
            margin-right: 10px;
        }
        button {
            height: 40px;
            width: 70px;
        }
    }
    .line {
        margin: 0px 11px;
        border: 1px dashed #58C5E0; // background: rebeccapurple;
    }
    p {
        margin: 0px 10px;
        margin-top: 5px;
        text-align: left;
        height: 30px;
        font-size: 12px;
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
                text: '购买续费',
                showBack: true,
                right: false,
            },
            listData: '',
        };
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetServicePrice' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetServicePrice');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());

            this.$http.post('https://ycwidx.cpnet.com', data).then(res => {
                this.listData = res.data.Data
            }).catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    }
}
</script>
