<template>
  <div>
    <m-header :title="title"></m-header>
    lossPWD
  </div>
</template>

<script>
import mHeader from '../components/hearder/Hearder';
export default {
  name: 'lossPwdVC',
  data() {
    return {
      title: {
        text: "忘记密码",
        showBack: true
      },
    };
  },
  components: {
    mHeader
  },
}
</script>