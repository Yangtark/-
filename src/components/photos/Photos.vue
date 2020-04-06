<template>
  <div class="content">
    <div class="top-photo">
      <i class="iconfont icon-leftn" @click="toGo1"></i>
      <p>相册</p>
      <span></span>
    </div>
    <ul class="photo-list">
      <li>
        <div class="new-item">
          <p>新建相册</p>
        </div>
        <div class="int-item">
          <p></p>
          <span></span>
        </div>
      </li>
      <li>
        <div class="new-item">
          <p></p>
        </div>
        <div class="int-item">
          <p>我们在一起</p>
          <span>30张</span>
        </div>
      </li>
      <li>
        <div class="new-item">
          <p></p>
        </div>
        <div class="int-item">
          <p>小宝走路照</p>
          <span>30张</span>
        </div>
      </li>
      <li>
        <div class="new-item">
          <p></p>
        </div>
        <div class="int-item">
          <p>小宝第一次</p>
          <span>30张</span>
        </div>
      </li>
      <li>
        <div class="new-item">
          <p></p>
        </div>
        <div class="int-item">
          <p>今天很开心</p>
          <span>50张</span>
        </div>
      </li>
      <li>
        <div class="new-item">
          <p></p>
        </div>
        <div class="int-item">
          <p>我们的全家福</p>
          <span>30张</span>
        </div>
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
    toGo1 () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.content {
  margin-bottom: 2.31rem;
}
.top-photo {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F8F8F8);
  position: fixed;
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
.photo-list {
  @include rect(20rem,auto);
  @include flexbox();
  // @include flex-direction(column);
  margin: 4.31rem auto 0 auto;
  flex-wrap: wrap;
  li {
    @include rect(8.75rem,14rem);
    @include flex-direction(column);
     margin: 0 0.6rem 2rem 0.6rem;
    .new-item {
      @include rect(8.75rem,8.75rem);
      text-align: center;
      line-height: 8.75rem;
      @include font-size(0.88rem);
      @include background-color(#F4F2F2);
      border-radius: 10px;
    }
    .int-item {
      @include rect(8.75rem,3.13rem);
      text-align: left;
      margin-top: 1rem;
      p {
        @include font-size(0.88rem);
      }
      span {
        @include font-size(0.81rem);
      }
    }
  }
}
.van-divider {
  @include rect(18.44rem,auto);
  margin-left: 2.5rem;
}
</style>
