<template>
    <div>
        <div class="bottomcontainer" v-for="(cell,index) in data.Data" :key="cell.PlanArr" @click="pushDetail($event,index)">
            <!-- <span wx:if="{{DSType==0}}" class="txt-item1" style="border-top-left-radius: 25rpx;color: RGB(84, 128, 215); background:RGB(222, 231, 247);">{{Name}}</span> -->
            <!-- <span wx:else class="txt-item1" style="border-top-left-radius: 25rpx;color: RGB(199, 64, 78); background:RGB(247, 237, 237);">{{Name}}</span> -->
            <span v-if="cell.DSType === 0" class="txt-item1" style="width:22%;border-top-left-radius: 5px;color: RGB(84, 128, 215); background:RGB(222, 231, 247);">{{cell.Name}}</span>
            <span v-else-if="cell.DSType === 1" class="txt-item1" style="width:22%;border-top-left-radius: 5px;color: RGB(199, 64, 78); background:RGB(247, 237, 237);">{{cell.Name}}</span>
            <span class="txt-item1" style="width:22%;background:#fff; color:#767676;border-right: 1px dotted #d8d8d8;">{{cell.PlanSection}}</span>
            <div class="txt-item2">
                <span class="btn" v-if="cell.DSType === 0">{{cell.EndIndex ? cell.EndIndex : 1}} 定</span>
                <span class="btn1" v-else>{{cell.EndIndex ? cell.EndIndex : 1}} 杀</span>
            </div>
            <span class="txt-item3" style="">{{cell.GuessValue}}</span>

            <div class="zhengquelv" style="width:28%;border-top-right-radius: 5px;">
                <span class="baifenbi">{{cell.GuessPercent}}</span>

                <div class="diandian">
                    <div v-for="item in dian[index]" :key="item">
                        <div v-if="item === '1'" class="dianMiddle" style="background:#30bb78;"></div>
                        <div v-else-if="item === '0'" class="dianMiddle" style="background:#d82e4b;"></div>
                        <div v-else class="dianMiddle" style="background:black;"></div>
                    </div>
                </div>

                <div class="dian" v-show="isSandian">
                    <div class="dian-dian"></div>
                    <div class="dian-dian"></div>
                    <div class="dian-dian"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#bundle {
    .juzhong {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
}

.bottomcontainer {
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    border: 1px solid #d8d8d8;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    word-wrap: break-word;
}

.txt-item1 {
    padding-left: 5px;
    display: flex;
    width: 60px;
    font-size: 10px;
    background: #f7eded;
    #bundle>.juzhong;
}

.txt-item2 {
    border-right: 1px dotted #d8d8d8;
    width: 60px;
    font-size: 10px;
    background: #fff;
    text-align: center;
    display: flex;
    align-items: center; // padding: 0px 5px;
    color: #767676;
    #bundle>.juzhong;
    .btn{
        // background: rgb(88, 88, 88);
        width: 30px;
        padding: 1px;
        border: 1px solid RGB(84, 128, 215);
        border-radius: 9px;
        font-size: 10px;
        color: RGB(84, 128, 215);
    }
     .btn1{
         width: 30px;
        // background: rgb(88, 88, 88);
        padding: 1px;
        border: 1px solid RGB(199, 64, 78);
        border-radius: 9px;
        font-size: 10px;
        color: RGB(199, 64, 78);
    }
}

.txt-item3 {
    border-right: 1px dotted #d8d8d8;
    width: 40%;
    font-size: 10px;
    background: #fff;
    text-align: center;
    line-height: auto;
    padding: 15px 5px;
    color: #16B482;
    #bundle>.juzhong;
}

.zhengquelv {
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    #bundle>.juzhong;
}

.baifenbi {
    font-size: 13px;
    #bundle>.juzhong;
    color: #767676;
}

.diandian {
    margin-bottom: 5px;
    #bundle>.juzhong;
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
    #bundle>.juzhong;
}

.dian-dian {
    background: #909090;
    height: 4px;
    width: 4px;
    margin-left: 4px;
    border-radius: 4px;
    // color: #767676;
}
</style>

<script>


export default {
    props: {
        data: {
            type: Object
        }
    },

    created() {
        this.PlanData = this.data;
        console.log(this.PlanData)
    },
    data() {
        return {
            myheight: 100,
            PlanData: '',
        }
    },
    computed: {
        dian: {
            // getter
            get: function() {
                var temp = [];
                if (this.PlanData.Data[0].GuessResultList.split(',').length > 10) {
                    for (var i = 0; i < this.PlanData.Data.length; i++) {
                        temp.push(this.PlanData.Data[i].GuessResultList.split(',').reverse().slice(0, 10))
                    }
                } else {
                    for (var i = 0; i < this.PlanData.Data.length; i++) {
                        temp.push(this.PlanData.Data[i].GuessResultList.split(',').reverse())
                    }
                }
                console.log(temp);
                return temp;
            },
            // setter
            set: function(newValue) {

            }
        },
        isSandian: {
            get() {
                if (parseInt(this.PlanData.CycleCount) > 0 && parseInt(this.PlanData.CycleCount) <= 10) {
                    return false;
                } else {
                    return true;
                }

            }
        }
    },
    methods: {
        pushDetail(event, index) {
            console.log("push");
            console.log(index);
            localStorage.detailID = index;
            this.$router.push({
                path: '/planVC/planDetail',
            });
        }
    }


}
</script>
