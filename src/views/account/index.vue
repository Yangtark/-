<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="账号信息"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <van-cell value="18770679401" title="手机号码" is-link to="setpassword" />
    <van-cell value="已设置" title="登录密码" is-link to="" />
    <van-cell value="未绑定" title="QQ账号" is-link to="" />
    <van-cell value="未绑定" title="微信账号" is-link to="" />
    <van-cell value="未绑定" title="微博账号" is-link to="" />
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Cell } from 'vant'

Vue.use(NavBar)
Vue.use(Cell)

export default {
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1) // 返回上一层
      // this.$router.replace('user')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
</style>
