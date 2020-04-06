<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="宝贝信息"
        left-text="上一步"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <p>选择宝贝性别及孕期</p>
    <van-button round to="babyinfo">男宝贝</van-button>
    <van-button round to="babyinfo">女宝贝</van-button>
    <van-button round to="babyinfo">孕期中</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, button } from 'vant'

Vue.use(NavBar)
Vue.use(button)

export default {
  methods: {
    onClickLeft () {
      this.$router.replace('user') // this.$router.replace('home')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
p {
    position: absolute;
    left: 6.63rem;
    top: 6.62rem;
    width: 12rem;
    height: 1.56rem;
    color: rgba(65, 80, 88, 1);
    font-size: 1.13rem;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  .van-button {
    height: 4.5rem;
    width: 4.5rem;
    top: 10rem;
    left: 2rem;
    margin: 1rem;
    background-color: #ccc;
  }
</style>
