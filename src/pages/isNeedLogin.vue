<template>

</template>

<script>
export default {
  created() {
    // //系统判断
    // if (!this.IsPC()) {
    //   if (localStorage.sid && localStorage.Token && localStorage.tokenCode) {
    //     this.$router.push("/planVC");
    //   } else {
    //     this.$router.push("/login");
    //   }
    // } else {
    //   this.$router.push("/error");
    // }
  },
  mounted() {
    var that = this;
    //系统判断
    if (!that.IsPC()) {
      if (localStorage.sid && localStorage.Token && localStorage.tokenCode) {
        // that.$router.push("/firstpage");
        that.login();
      } else {
        if (localStorage.sid) {
          that.$router.push("/login");
        } else {
          that.$router.push("/XZcaizhong");
        }
      }
    } else {
      // this.$router.push('/error')
      if (localStorage.sid && localStorage.Token && localStorage.tokenCode) {
        // that.$router.push("/firstpage");
        that.login();
      } else {
        if (localStorage.sid) {
          that.$router.push("/login");
        } else {
          that.$router.push("/XZcaizhong");
        }
      }
    }
  },
  methods: {
    IsPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["iPhone", "iPad", "iPod"];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    login() {
      let signStr =
        localStorage.sid +
        localStorage.user_name +
        this.global.AppType +
        this.global.AppCode +
        this.global.AppVersion +
        this.$sha256.sha256(localStorage.user_pwd).toUpperCase();
      console.log(signStr);
      let data = new FormData();
      data.append("Action", "Login");
      data.append("SID", localStorage.sid);
      data.append("Account", localStorage.user_name);
      data.append("AppType", this.global.AppType);
      data.append("AppCode", this.global.AppCode);
      data.append("AppVersion", this.global.AppVersion);
      data.append("Sign", this.$sha256.sha256(signStr).toUpperCase());

      localStorage.pwd = this.$sha256
        .sha256(localStorage.user_pwd)
        .toUpperCase();
      this.$http
        .post(this.global.url, data)
        .then(res => {
          if (res) {
            localStorage.uid = res.data.Data.UID;
            localStorage.AuthTypeName = res.data.Data.AuthTypeName;
            localStorage.SiteUrl = res.data.Data.SiteUrl;
            localStorage.AuthType = res.data.Data.AuthType;
            localStorage.Username = res.data.Data.NickName;
            localStorage.Token = res.data.Data.Token;
            localStorage.PayType = res.data.Data.PayType;
            localStorage.QQUrl = res.data.Data.QQUrl;
            localStorage.tokenCode = this.$sha256
              .sha256(res.data.Data.Token + localStorage.pwd)
              .toUpperCase();
            localStorage.OfficialUrl = res.data.Data.OfficialUrl;
            localStorage.FreePlanSiteUrl = res.data.Data.FreePlanSiteUrl;
            localStorage.QQCode = res.data.Data.QQCode;
            this.$router.push({
              path: "/planVC"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
