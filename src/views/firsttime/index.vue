<template>
  <div class="content">
    <div class="top-first">
      <router-link class="iconfont icon-leftn" to="/note" tag="i"></router-link>
      <p>第一次</p>
      <span></span>
    </div>
    <ul class="list-con">
      <li>自定义</li>
      <li>抬头</li>
      <li>翻身</li>
      <li>走路</li>
      <li>吐泡泡</li>
      <li>吃饭</li>
      <li>叫爸爸</li>
      <li>叫妈妈</li>
      <li>走路</li>
      <li>眨眼</li>
      <li>抬头</li>
      <li>翻身</li>
      <li>走路</li>
      <li>吐泡泡</li>
      <li>吃饭</li>
      <li>叫爸爸</li>
      <li>叫妈妈</li>
      <li>走路</li>
    </ul>
    <van-divider>没有了</van-divider>
  </div>
</template>

<script>
import Vue from 'vue'
import { Divider } from 'vant'

Vue.use(Divider)
export default {
  methods: {
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top-first {
  @include rect(100%,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F8F8F8);
  position: fixed;
  i {
    @include rect(1.7rem,1.8rem);
    @include font-size(1.5rem);
    margin-left: 1rem;
    @include color(#c5c5c5);
  }
  p {
    @include font-size(1.13rem);
    padding-left: 2.1rem;
  }
  span {
    @include rect(3.31rem,1.56rem);
    text-align: center;
    line-height: 1.56rem;
    @include font-size(0.88rem);
    @include color(#c5c5c5);
    padding-right: 1rem;
  }
}
.list-con {
  @include rect(100%,auto);
  @include flexbox();
  @include justify-content();
  flex-wrap: wrap;
  margin-top: 2.81rem;
  li {
    @include rect(5.13rem,5.13rem);
    @include background-color(#9F9F9F);
    margin: 0.8rem 1rem;
    border-radius: 0.6rem;
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include font-size(0.88rem);
    @include color(#fff);
  }
}
.van-divider {
  @include rect(19.44rem,auto);
  margin-left: 2rem;
}
</style>
