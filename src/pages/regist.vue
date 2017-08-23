<template>
  <div>
    <m-header :title="title"></m-header>
    regist
  </div>
</template>

<script>
import mHeader from '../components/hearder/Hearder';
export default {
  name: 'registVC',
  data() {
    return {
      title: {
        text: "注册",
        showBack: true
      },
    };
  },
  components: {
    mHeader
  },
}
</script>
