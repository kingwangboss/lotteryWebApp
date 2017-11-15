<template>
    <div class="main">
            <img class="line1" src="../../static/images/zuo.png">
            </img>
            <!-- <div class="line21">
                sdgdsgsdfgsdfgdfgsdfg
            </div> -->
            <img style="width:100px;height:40px;" src="../../static/images/zhong.png" alt="">
            <img class="line3" src="../../static/images/you.png">
            </img>
    </div>
</template>

<style lang="less" scoped>
.main {
    display: flex;
    flex-direction: row;
    margin: 2px;
    line-height: 38px;
    color: #fffde4;
    background: greenyellow;
    padding: 100px;
    //   background: red;
    .line1 {
      background-repeat: no-repeat;
      height: 40px;
      width: 19px;
    }
    .line21 {
      background: url("../../static/images/zhong.png");
      background-repeat: repeat;
      font-size: 12px;
      height: 40px;
      color: red;
    //   padding:0px -5px 0px -5px;
    }
    
    .line3 {
      background-repeat: no-repeat;
      height:40px;
      width: 19px;
    }
}
</style>


<script>
export default {};
</script>
