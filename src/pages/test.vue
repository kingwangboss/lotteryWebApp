<template>
    <div>
        <div class="main">
            <img class="line1" src="../../static/images/ball_left.png">
            </img>
            <div class="line2">
                20
            </div>
            <img class="line3" src="../../static/images/ball_right.png">
            </img>
        </div>

        <div style="background:red;">
            <img src="../../static/images/Plan-05.png" alt="">
        </div>
    

    </div>
</template>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: row;
  padding: 10px;
  background: red;
  .line1 {
    // background: url('../../static/images/ball_left.png');
    // background-repeat:no-repeat;
  }
  .line2 {
    background: url("../../static/images/ball_center.png");
    background-repeat: repeat;
    // padding: 10px;
    width: 100px;
  }
  .line3 {
    // background: url('../../static/images/ball_right.png');
    // background-repeat:no-repeat;
  }
}

</style>


<script>
export default {};
</script>
