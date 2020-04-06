<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="我的订单"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <van-tabs v-model="activeName">
      <router-link to="/phonealbum">
        <van-tab title="全部" name="a">
          <van-card
            num="1已收货"
            price="88"
            title="尊享相册"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-tab>
      </router-link>
      <van-tab title="待付款" name="b">您暂时没有待付款商品</van-tab>
      <van-tab title="待发货" name="c">您暂时没有待发货商品</van-tab>
      <van-tab title="待收货" name="d">您暂时没有待收货商品</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Tab, Tabs, Card } from 'vant'

Vue.use(NavBar)
Vue.use(Tab).use(Tabs)
Vue.use(Card)

export default {
  data () {
    return {
      activeName: 'a'
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
