<template>
  <div class="content">
    <div class="top">
      <router-link class="iconfont icon-leftn" to="/note" tag="i"></router-link>
      <p>宝贝</p>
      <router-link to="/note" tag="span">确定</router-link>
    </div>
    <div class="note-zi">
      <van-radio-group v-model="radio">
        <van-radio name="1" checked-color="#999"></van-radio>
      </van-radio-group>
      <div class="note-text1">
        <p>92cm</p>
        <span>身高</span>
      </div>
      <div class="note-img"></div>
      <div class="note-text2">
        <p>20kg</p>
        <span>体重</span>
      </div>
      <div class="note-text3">
        <p>小小雨</p>
        <span>5岁</span>
      </div>
    </div>
    <div class="note-zi">
      <van-radio-group v-model="radio">
        <van-radio name="2" checked-color="#999"></van-radio>
      </van-radio-group>
      <div class="note-text1">
        <p>92cm</p>
        <span>身高</span>
      </div>
      <div class="note-img"></div>
      <div class="note-text2">
        <p>20kg</p>
        <span>体重</span>
      </div>
      <div class="note-text3">
        <p>小宝宝</p>
        <span>1岁</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { RadioGroup, Radio } from 'vant'

Vue.use(RadioGroup)
Vue.use(Radio)
export default {
  data () {
    return {
      radio: '1'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F8F8F8);
  position: relative;
  i {
    @include rect(1.7rem,1.8rem);
    @include font-size(1.5rem);
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
.note-zi {
  @include rect(23.44rem,13rem);
  @include background-color(#E8E8E8);
  position: relative;
  margin-top: 1rem;
  .van-icon {
    @include background-color(#fff);
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
  }
  .note-img {
    @include rect(4.31rem,4.31rem);
    border-radius: 50%;
    @include background-color(#fff);
    position: absolute;
    left: 9.56rem;
    top: 4.19rem;
  }
  .note-text1 {
    @include rect(9.56rem,3.13rem);
    position: absolute;
    top: 6rem;
    left: 0;
    text-align: center;
    p {
      @include font-size(0.88rem);
    }
    span {
      @include font-size(0.81rem);
    }
  }
  .note-text2 {
    @include rect(9.56rem,3.13rem);
    position: absolute;
    top: 6rem;
    left: 13.88rem;
    text-align: center;
    p {
      @include font-size(0.88rem);
    }
    span {
      @include font-size(0.81rem);
    }
  }
  .note-text3 {
    @include rect(6.69rem,3.13rem);
    position: absolute;
    top: 9.56rem;
    left: 8.38rem;
    text-align: center;
    p {
      @include font-size(1rem);
    }
    span {
      @include font-size(0.81rem);
    }
  }
}
</style>
