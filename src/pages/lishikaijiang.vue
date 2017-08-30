<template>
  <div>
    <m-header :title="title"></m-header>
    <cell :data="lishiData"></cell>

  </div>
</template>


<script>
import cell from '../components/lishicell/lishicell'
var data = require('../../static/data/historyData')
import mHeader from '../components/hearder/Hearder';
import sha256 from '../util/sha256'
export default {
  name: 'lishikaijiang',
  data() {
    return {
      lishiData: Array,
      title: {
        text: "历史开奖",
        showBack: false,
      },
    }
  },

  components: {
    cell,
    mHeader
  },
  created() {
    this.lishiData = data.KJArr;
  },
  methods: {
    getData() {
      let tokenCode = localStorage.tokenCode;
      let signStr = 'Action=GetCPDatas' + '&SID=' + localStorage.sid + '&Token=' + localStorage.Token + '&Page=1' + tokenCode;
      let data = new FormData();
      data.append('Action', 'GetCPDatas');
      data.append('SID', localStorage.sid);
      data.append('Token', localStorage.Token);
      data.append('Page', '1');
      data.append('Sign', sha256.sha256(signStr).toUpperCase());

      this.$http.post(localStorage.SiteUrl, data).then(res => {
        console.log(res);
        this.lishiData = res.data.Data
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
