<template>
    <div class="bottomcontainer">
        <!-- <span wx:if="{{DSType==0}}" class="txt-item1" style="border-top-left-radius: 25rpx;color: RGB(84, 128, 215); background:RGB(222, 231, 247);">{{Name}}</span> -->
        <!-- <span wx:else class="txt-item1" style="border-top-left-radius: 25rpx;color: RGB(199, 64, 78); background:RGB(247, 237, 237);">{{Name}}</span> -->
        <span class="txt-item1" style="border-top-left-radius: 12.5px;color: RGB(84, 128, 215); background:RGB(222, 231, 247);">冠军定码</span>
        <span class="txt-item1" style="background:#fff; color:#767676;border-right: 1px dotted #d8d8d8;">534-536期</span>
        <span class="txt-item2">3</span>
        <span class="txt-item3">01 02 03 04 05</span>
        <div class="zhengquelv" style="border-top-right-radius: 12.5px;">
            <span class="baifenbi">80%</span>
            <div class="diandian">

                <!-- <div wx:if="{{item == 1}}" class="dianMiddle" style="background:#30bb78;"></div>
                    <div wx:elif="{{item == 0}}" class="dianMiddle" style="background:#d82e4b;"></div>
                    <div wx:else class="dianMiddle" style="background:black;"></div> -->
            </div>

            <!-- <block wx:if="{{isSandian}}"> -->
            <div class="dian">
                <div class="dian-dian"></div>
                <div class="dian-dian"></div>
                <div class="dian-dian"></div>
            </div>
            <!-- </block> -->

        </div>
    </div>
</template>

<style lang="less" scoped>
.bottomcontainer {
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    border: 1px solid #d8d8d8;
    border-top-left-radius: 12.5px;
    border-top-right-radius: 12.5px;
    word-wrap: break-word;
}

.txt-item1 {
    padding-left: 5px;
    display: flex;
    width: 60px;
    font-size: 12px;
    background: #f7eded;
    align-items: center;
}

.txt-item2 {
    border-right: 1px dotted #d8d8d8;
    width: 25x;
    font-size: 15px;
    background: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    padding-left: 12.5px;
    color: #767676;
}

.txt-item3 {
    border-right: 1px dotted #d8d8d8;
    width: 125px;
    font-size: 15px;
    background: #fff;
    text-align: center;
    line-height: auto;
    padding: 15px 5px;
    color: #16B482;
}

.zhengquelv {
    width: 85px;
    background: #fff;
    display: flex;
    flex-direction: column;
}

.baifenbi {
    height: 15px;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    padding-top: 5px;
    color: #767676;
}

.diandian {
    height: 15px;
    line-height: 15px;
    align-content: center;
    display: flex;
    flex-direction: row;
    margin-left: 5px;
}

.dianMiddle {
    background: red;
    height: 4px;
    width: 4px;
    margin-left: 3px;
    border-radius: 4px;
    margin-top: 5px;
}

.dian {
    height: 15px;
    line-height: 15px;
    display: flex;
    flex-direction: row;
    width: 85px;
    align-content: center;
    margin-left: 27.5px;
}

.dian-dian {
    background: black;
    height: 4px;
    width: 4px;
    margin-left: 4px;
    border-radius: 4px;
    color: #767676;
}
</style>

