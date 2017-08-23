<template>
  <div class="maincontainer">
    <div class="userinfo">
      <img class="userinfo-avatar" src="" background-size="cover"></img>
      <span class="userinfo-nickname">nickname</span>
    </div>

    <div class="middle">
    </div>

    <div class="bottom">
      <div class="bottom-cell">
        <img src="../../static/images/me/User-05.png"></img>
        <span>购买授权</span>
      </div>
      <div class="bottom-cell">
        <img src="../../static/images/me/User-07.png"></img>
        <span>在线客服</span>
      </div>
      <div class="bottom-cell" bindtap="shouquanClick">
        <img src="../../static/images/me/User-08.png"></img>
        <span>我的授权</span>
      </div>
      <div class="bottom-cell" bindtap="XGpwdClick">
        <img src="../../static/images/me/User-09.png"></img>
        <span>密码管理</span>
      </div>
      <div class="bottom-cell" bindtap="feedbackClick">
        <img src="../../static/images/me/User-10.png"></img>
        <span>意见反馈</span>
      </div>
      <div class="bottom-cell" bindtap="aboutClick">
        <img src="../../static/images/me/User-11.png"></img>
        <span>关于我们</span>
      </div>
    </div>

    <!-- <div class="bottom-btndiv">
        <button plain="{{true}}" style="background-color: rgb(229, 87, 77);border-color:rgba(0,0,0,0);color:#fff;" class="bottom-btn">退出登录</button>
      </div> -->

  </div>
</template>

<style lang="less" scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(229, 87, 77);
}

.userinfo-avatar {
  width: 128px;
  height: 128px;
  margin: 20px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #fff;
  font-size: 24px;
  padding-bottom: 20rpx;
}

.middle {
  background: #EDEDED;
  height: 10px;
}

.bottom {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.bottom-cell {
  width: 125px;
  height: 125px;
  border: 1px solid gray;
  // border-style: none solid solid none;
  display: flex;
  flex-direction: column;
}

.bottom-cell image {
  width: 50px;
  height: 50px;
  margin-top: 25px;
  margin-left: 39px;
}

.bottom-cell text {
  text-align: center;
  margin-top: 10px;
  font-size: 26px;
  color: gray;
}

.bottom-btnView {
  width: 100%;
  position: fixed;
  bottom: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
}

.bottom-btn {
  width: 50%;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
}
</style>

