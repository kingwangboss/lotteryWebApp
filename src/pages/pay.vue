<template>
    <div>
        <m-header :title="title"></m-header>
        pay{{pid}}
    </div>
</template>

<style lang="less" scoped>

</style>

<script>
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
export default {
    data() {
        return {
            title: {
                text: '支付订单',
                showBack: true,
                right: false,
            },
            pid: localStorage.pid,
        };
    },
    components: {
        mHeader,
    },
    methods: {
        getData() {
            let tokenCode = localStorage.tokenCode;
            let signStr = 'Action=GetServicePriceByPid' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&PID=' + localStorage.pid + tokenCode;
            let data = new FormData();
            data.append('Action', 'GetServicePriceByPid');
            data.append('SID', localStorage.sid);
            data.append('Token', localStorage.Token);
            data.append('PID', localStorage.pid);
            data.append('Sign', sha256.sha256(signStr).toUpperCase());

            this.$http.post('https://ycwidx.cpnet.com', data).then(res => {
                this.listData = res.data.Data;
                for (var i = 0; i < this.listData.DesceList.length; i++) {
                    this.descStr.push(this.listData.DesceList[i].AuthType)
                }

            }).catch(error => {
                console.log(error);
            })
        },
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    }
}
</script>
