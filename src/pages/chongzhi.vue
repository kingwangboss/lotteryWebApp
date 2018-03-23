<template>
  <div>
      <m-header :title="title"></m-header>
      <div class="content">
          <div class="top">
              <div class="price">
                  <div class="num">598.00</div><div class="yuan">元</div>
              </div>
              <div class="money">金额</div>
          </div>

          <div class="middle">
              <div class="m_content">
                  <div class="text">支付编号</div>
                  <div class="p_num">383003270@qq.com</div>
                  <div class="copy">复制</div>
              </div>

              <div class="m_content">
                  <div class="text">支付宝账号</div>
                  <div class="p_num">12345678900003333</div>
                  <div class="copy">复制</div>
              </div>

              <div class="m_content">
                  <div class="text">户名</div>
                  <div class="p_num">sdsf</div>
                  <div class="copy">复制</div>
              </div>

              <div class="ps">
                  请打开您的支付宝转账至上述账号并备注支付编号
              </div>
          </div>

          <div class="bottom">
              <div class="contact">
                  <img src="../../static/images/chongzhi/s1_07.png" alt="">
                  <div>联系客服</div>
              </div>
          </div>
      </div>
  </div>
</template>

<style lang="less" scoped>
#bundle {
  .juzhong {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.content {
  display: flex;
  flex-direction: column;
  margin: 18vw 6vw 0px 6vw;
  border: 1px solid #cecece;
  border-radius: 2.2vw;
  .top {
    height: 30vw;
    margin: -1px -1px 0px -1px;
    background: url("../../static/images/chongzhi/s1_03.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    .price {
      display: flex;
      flex-direction: row;
      #bundle > .juzhong;
      align-items: flex-end;
      margin: 8vw 0 0 0;
      color: white;
      .num{
          font-size: 6vw;
      }
      .yuan{
          bottom: 0;
          margin-left: 2vw;
          font-size: 4vw;
          margin-bottom: 0.5vw;
      }
    }
    .money{
        margin: 3vw 0 0 0 ;
        font-size: 5vw;
        color: white;
    }
  }
  .middle {
    display: flex;
    flex-direction: column;
    margin: 8vw 1vw 0 1vw;
    border-bottom: 1px solid #cecece;
    #bundle > .juzhong;
    .m_content {
      display: flex;
      flex-direction: row;
      height: 10vw;
      line-height: 10vw;
      margin: 2vw 0;
      .text{
          width: 22vw;
          text-align: right;
          font-size: 4vw;
          color: #333;
          margin-right: 1.5vw;
      }
      .p_num{
          padding-left: 1.5vw;
          width: 36vw;
          font-size: 3vw;
          color: #333;
          text-align: left;
          border: 1px solid #ffbcbc;
          background: #fff7f7;
          border-radius: 5px;
      }
      .copy{
          margin-left: 1.5vw;
          padding:0 5vw;
          font-size: 4vw;
          background: #fc5c42;
          border-radius: 10vw;
          color: white;
      }
    }
    .ps {
      margin: 8vw 0 8vw 0;
      width: 65%;
      color: #fc5c42;
      font-size: 5vw;
      line-height: 8vw;
    }
  }
  .bottom {
      margin: 8vw 0 7vw 0;
      #bundle > .juzhong;
      .contact{
          display: flex;
          flex-direction: row;
          width: 130px;
          height: 38px;
          line-height: 40px;
          border: 1px solid #999;
          border-radius: 38px;
          color: #666;
          img{
              margin-top: 9px;
              margin-left: 20px;
              margin-right: 5px;
              width:20px;
              height: 20px;
          }
      }
  }
}
</style>

<script>
import mHeader from "../components/hearder/Hearder";
export default {
  data() {
    return {
      title: {
        text: "支付中心",
        showBack: true
      }
    };
  },
  components: {
    mHeader
  }
};
</script>
