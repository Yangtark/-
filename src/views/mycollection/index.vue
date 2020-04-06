<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="我的收藏"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <main>
      <router-link to="knowledge" tag="p" class="p1">育儿知识</router-link>
      <p class="p2">宝宝食谱</p>
      <p class="p3">能不能吃</p>
      <p class="p4">宝宝听听</p>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)

export default {
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
.content {
  @include flex();
  @include rect(100%, auto);
  @include overflow(auto);
  main {
    position: absolute;
    @include left(1.25rem);
    @include top(5rem);
    p {
      @include rect(20.88rem,2.5rem);
      @include text-align(center);
      @include font-size(0.88rem);
      @include border(0.06rem solid rgba(255,255,255,0));
      @include background-color(rgba(242,242,243,1));
      @include margin(2rem auto);
      @include line-height(2.5rem);
      font-family: Arial;
    }
  }
}
</style>
