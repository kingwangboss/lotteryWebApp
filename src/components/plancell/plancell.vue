<template>
    <div>
        <div class="bottomcontainer" v-for="(cell,index) in data.Data" :key="cell.PlanArr" @click="pushDetail($event,index)">
            <!-- <span wx:if="{{DSType==0}}" class="txt-item1" style="border-top-left-radius: 25rpx;color: RGB(84, 128, 215); background:RGB(222, 231, 247);">{{Name}}</span> -->
            <!-- <span wx:else class="txt-item1" style="border-top-left-radius: 25rpx;color: RGB(199, 64, 78); background:RGB(247, 237, 237);">{{Name}}</span> -->
            <span v-if="cell.DSType === 0" class="txt-item1" style="width:18%;border-top-left-radius: 12.5px;color: RGB(84, 128, 215); background:RGB(222, 231, 247);">{{cell.Name}}</span>
            <span v-else-if="cell.DSType === 1" class="txt-item1" style="width:18%;border-top-left-radius: 12.5px;color: RGB(199, 64, 78); background:RGB(247, 237, 237);">{{cell.Name}}</span>
            <span class="txt-item1" style="width:20%;background:#fff; color:#767676;border-right: 1px dotted #d8d8d8;">{{cell.PlanSection}}</span>
            <span class="txt-item2">{{cell.EndIndex ? cell.EndIndex : 1}}</span>
            <span class="txt-item3" style="width:40%">{{cell.GuessValue}}</span>

            <div class="zhengquelv" style="width:25%;border-top-right-radius: 12.5px;">
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
    #bundle>.juzhong;
}

.txt-item2 {
    border-right: 1px dotted #d8d8d8;
    width: 25px;
    font-size: 15px;
    background: #fff;
    text-align: center;
    display: flex;
    align-items: center; // padding: 0px 5px;
    color: #767676;
    #bundle>.juzhong;
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
    background: black;
    height: 4px;
    width: 4px;
    margin-left: 4px;
    border-radius: 4px;
    color: #767676;
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
                if (this.PlanData.Data.length > 10) {
                    for (var i = 0; i < this.PlanData.Data.length; i++) {
                        temp.push(this.PlanData.Data[i].GuessResultList.split(',').reverse().slice(0, 10))
                    }
                } else {
                    for (var i = 0; i < this.PlanData.Data.length; i++) {
                        temp.push(this.PlanData.Data[i].GuessResultList.split(',').reverse())
                    }
                }
            
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
        pushDetail(event,index) {
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
