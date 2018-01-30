<template>
  <div>
      缩水组号{{plandata}}
      <button v-for="(item,index) in plandata" class="btn" @click="btnclick(item)">
        {{item}}
      </button>
  </div>
</template>

<style lang="less" scoped>
.btn {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import sha256 from "../util/sha256";
export default {
  props: ["data"],
  data() {
    return {
      plandata: Object
    };
  },
  watch: {
    data: function(now, old) {
      this.plandata = this.data;
      console.log(this.plandata);
    }
  },
  methods: {
    btnclick(item) {
      localStorage.playtype = item
      this.$router.push("/suoshuizuhao1")
    }
  },
  created() {
    this.plandata = this.data;
    // console.log(this.plandata);
  },
  mounted() {}
};
</script>
