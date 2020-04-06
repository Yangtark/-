<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="通用设置"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <van-cell title="账号信息" is-link to="account" />
    <van-cell title="新消息通知" is-link to="" />
    <van-cell-group>
      <van-switch-cell v-model="checkeda" title="大字体" />
    </van-cell-group>
    <van-cell title="视频设置" is-link to="" />
    <van-cell-group>
      <van-switch-cell v-model="checkedb" title="只使用WiFi上传大文件" />
    </van-cell-group>
    <van-cell-group>
      <van-switch-cell v-model="checkedc" title="听筒模式" />
    </van-cell-group>
    <van-cell title="清除缓存" is-link to="" />
    <router-link to="../user/Nologin">
      <button type="btn" class="tuichu" @click="delInfo">退出登录</button>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Cell, SwitchCell, CellGroup } from 'vant'

Vue.use(NavBar)
Vue.use(Cell)
Vue.use(SwitchCell)
Vue.use(CellGroup)

export default {
  data () {
    return {
      checkeda: true,
      checkedb: true,
      checkedc: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1) // 返回上一层
      // this.$router.replace('user')
    },
    delInfo () {
      localStorage.removeItem('isLogin')
      this.$router.push('/user/nologin')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.tuichu {
  margin-top: 3rem;
  width: 100%;
  height: 2.5rem;
  line-height: 1.25rem;
  color: rgba(16, 16, 16, 1);
  font-size: 0.88rem;
  text-align: center;
  font-family: Arial;
  border: 0.06px solid rgba(187, 187, 187, 1);
}
</style>
