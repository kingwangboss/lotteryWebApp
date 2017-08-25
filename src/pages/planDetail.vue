<template>
    <div>
        <m-header :title="title"></m-header>
        <kjview></kjview>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="冠军定码" name="first">冠军定码</el-tab-pane>
            <el-tab-pane label="亚军定码" name="second">亚军定码</el-tab-pane>
            <el-tab-pane label="季军定码" name="third">季军定码</el-tab-pane>
            <el-tab-pane label="冠军杀码" name="fourth">冠军杀码</el-tab-pane>
            <el-tab-pane label="冠军定码" name="a">冠军定码</el-tab-pane>
            <el-tab-pane label="亚军定码" name="b">亚军定码</el-tab-pane>
            <el-tab-pane label="季军定码" name="c">季军定码</el-tab-pane>
            <el-tab-pane label="冠军杀码" name="d">冠军杀码</el-tab-pane>
        </el-tabs>
        plandetail
    </div>
</template>

<style lang="less" scoped>

</style>


<script>
import mHeader from '../components/hearder/Hearder';
import kjview from '../components/kjview/kjview'

export default {
    data() {
        return {
            title: {
                text: '计划详情',
                showBack: true,
            },
        };
    },
    components: {
        mHeader,
        kjview,
    }
}
</script>
