<template>
    <div class="maincontainer">

        <div class="middleLine">
        </div>

        <div class="middlecontainer">
            <span class="textbtn first">选择彩种</span>
            <span class="textbtn">更改计划</span>
            <span class="textbtn">计划分享</span>
            <span class="textbtn">切换公式</span>
            <span class="textbtn last">近10期计划</span>
        </div>

        <plancell></plancell>
        <plancell></plancell>
        <plancell></plancell>
        <plancell></plancell>
        <plancell></plancell>
        <plancell></plancell>
        <plancell></plancell>
        <plancell></plancell>

    </div>
</template>

<style lang="less" scoped>
.maincontainer {
    // padding-bottom: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #fbf9fe;
    .middleLine {
        height: 10px;
        background: #ededed;
    }
    .middlecontainer {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .textbtn {

            font-size: 12px;
            width: 17%;
            margin-top: 10px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
            background: #f6f6f6;
            border: 1px solid #d8d8d8;
            text-align: center;
            color: #767676;
            /* border-top-left-radius: 15rpx;
   border-bottom-left-radius: 15rpx; */
            &.first {
                border-top-left-radius: 7.5px;
                border-bottom-left-radius: 7.5px;
            }
            &.last {
                border-top-right-radius: 7.5px;
                border-bottom-right-radius: 7.5px;
                width: 26%;
            }
        }
    }
    p {
        height: 70px;
        line-height: 70px;
    }
    .sss {
        background: blue;
    }
    .last {
        background: rebeccapurple;
    }
}
</style>

<script>
import plancell from '../components/plancell/plancell'
export default {
    components: {
        plancell,
    }

}
</script>
