<template>
    <div class="page-container">
        <m-header :title="title"></m-header>

        <div class="page-wrap" :class="title.tabClass">
            <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item id="plan">
                    <kjview></kjview>
                    <plan></plan>
                </mt-tab-container-item>
                <mt-tab-container-item id="shujufenxi">
                    <shujufenxi></shujufenxi>
                </mt-tab-container-item>
                <mt-tab-container-item id="lishi">
                    <lishikaijiang></lishikaijiang>
                </mt-tab-container-item>
                <mt-tab-container-item id="wo">
                    <wo></wo>
                </mt-tab-container-item>

            </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="plan">
                <img slot="icon" :src="tabList['plan'].src"> 计划追号
            </mt-tab-item>
            <mt-tab-item id="shujufenxi">
                <img slot="icon" :src="tabList['shujufenxi'].src"> 数据分析
            </mt-tab-item>
            <mt-tab-item id="lishi">
                <img slot="icon" :src="tabList['lishi'].src"> 历史开奖
            </mt-tab-item>
            <mt-tab-item id="wo">
                <img slot="icon" :src="tabList['wo'].src"> 我
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>


<script>
import mHeader from '../components/hearder/Hearder';
import plan from './plan'
import shujufenxi from './shujufenxi'
import lishikaijiang from './lishikaijiang'
import wo from './wo'
import kjview from '../components/kjview/kjview'


const titleList = [
    {
        text: '计划追号',
        tabName: 'plan',
        tabClass: 'plan'
    },
    {
        text: '数据分析',
        tabName: 'shujufenxi',
        tabClass: 'shujufenxi'
    },
    {
        text: '历史开奖',
        tabName: 'lishi',
        tabClass: 'lishikaijiang'
    },
    {
        text: '我',
        tabName: 'wo',
        tabClass: 'wo'
    }
];

const tabList = {
    plan: {
        src: require('../../static/images/shouye1.png'),
        defaultSrc: require('../../static/images/shouye.png'),
        activeSrc: require('../../static/images/shouye1.png')
    },
    shujufenxi: {
        src: require('../../static/images/rizhi.png'),
        defaultSrc: require('../../static/images/rizhi.png'),
        activeSrc: require('../../static/images/rizhi1.png')
    },
    lishi: {
        src: require('../../static/images/lishikaijiang.png'),
        defaultSrc: require('../../static/images/lishikaijiang.png'),
        activeSrc: require('../../static/images/lishikaijiang1.png')
    },
    wo: {
        src: require('../../static/images/wo.png'),
        defaultSrc: require('../../static/images/wo.png'),
        activeSrc: require('../../static/images/wo1.png')
    }
};

export default {
    name: 'planVC',
    data() {
        return {
            selected: 'plan',
            titleList: titleList,
            title: titleList[0],
            tabList: tabList,
        };
    },
    components: {
        mHeader,
        plan,
        shujufenxi,
        lishikaijiang,
        wo,
        kjview,
    },
    watch: {
        selected(val, oldVal) {
            console.log(val);
            console.log(oldVal);
            this.tabList[val].src = this.tabList[val].activeSrc;
            this.tabList[oldVal].src = this.tabList[oldVal].defaultSrc;
            // console.log(this.tabList[val].src);
            switch (val) {
                case 'plan':
                    this.title = this.titleList[0];
                    break;
                case 'shujufenxi':
                    this.title = this.titleList[1];
                    break;
                case 'lishi':
                    this.title = this.titleList[2];
                    break;
                case 'wo':
                    this.title = this.titleList[3];
                    break;
            }
        }
    },

}
</script>

<style lang="less" scoped>
.page-wrap {
    overflow: auto;
    height: 100%;
    margin-bottom:55px;

    .mint-tab-container {
        height: 100%;
        margin-top:0;
        margin-bottom:0;
        z-index :0
    }
}


.mint-tabbar>.mint-tab-item.is-selected {
    color: #ff0000;
}
</style>
