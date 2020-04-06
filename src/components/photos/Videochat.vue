<template>
  <div class="content">
    <div class="top-zhaopian">
      <i class="iconfont icon-leftn" @click="toGo2"></i>
      <p>视频</p>
      <span></span>
    </div>
    <div class="zp-img">
      <img src="../../images/ceshi2.png" alt="">
      <div class="zp-img-txt">
        <p>我们的小宝</p>
        <span>50个</span>
      </div>
    </div>
    <div class="zp-sc">
      <p>上传视频</p>
    </div>
    <ul class="zp-list">
      <li>
        <p>2018.10.31</p>
        <ul class="zp-item">
          <li class="zp-tu"><img src="" alt=""></li>
          <li class="zp-tu"><img src="" alt=""></li>
          <li class="zp-tu"><img src="" alt=""></li>
        </ul>
      </li>
      <li>
        <p>2018.11.01</p>
        <ul class="zp-item">
          <li class="zp-tu"><img src="" alt=""></li>
          <li class="zp-tu"><img src="" alt=""></li>
          <li class="zp-tu"><img src="" alt=""></li>
        </ul>
      </li>
      <li>
        <p>2018.10.31</p>
        <ul class="zp-item">
          <li class="zp-tu"><img src="" alt=""></li>
          <li class="zp-tu"><img src="" alt=""></li>
          <li class="zp-tu"><img src="" alt=""></li>
        </ul>
      </li>
    </ul>
    <van-divider>没有更多了</van-divider>
  </div>
</template>

<script>
import Vue from 'vue'
import { Divider } from 'vant'

Vue.use(Divider)
export default {
  methods: {
    toGo2 () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top-zhaopian {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F8F8F8);
  position: fixed;
  z-index: 5;
  i {
    @include rect(1.7rem,1.8rem);
    @include font-size(1.5rem);
    @include color(#c5c5c5);
    padding-left: 1rem;
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
.zp-img {
  @include rect(23.44rem,12.5rem);
  margin-top: 2.81rem;
  position: relative;
  img {
    @include rect(23.44rem,12.5rem);
  }
  .zp-img-txt {
    @include rect(6.38rem,3.13rem);
    position: absolute;
    bottom: 0.1rem;
    left: 1rem;
    p {
      @include font-size(1.13rem);
    }
    span {
      @include font-size(0.88rem);
    }
  }
}
.zp-sc {
  @include rect(19.69rem,3.13rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  border: 1px solid #BBBBBB;
  border-radius: 10px;
  margin: 2rem auto;
  p {
    @include font-size(0.88rem);
  }
}
.zp-list {
  @include rect(23.44rem,auto);
  @include flexbox();
  @include flex-direction(column);
  li {
    @include rect(23.44rem,10.63rem);
    @include flexbox();
    @include flex-direction(column);
    margin-bottom: 0.5rem;
    p {
      @include rect(8.44rem,3.13rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      @include font-size(0.88rem);
      @include color(#101010);
    }
    .zp-item {
      @include rect(23.44rem,7.5rem);
      @include flexbox();
      .zp-tu {
        @include rect(7.06rem,7.5rem);
        @include background-color(#F4F2F2);
        border-radius: 10px;
        margin: 0 0.4rem;
      }
    }
  }
}
</style>
