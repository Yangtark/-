<template>
  <div class="container">
    <div class="content">
      <transition name="test">
      <router-view></router-view>
      </transition>
    </div>
    <ul class="pho">
      <router-link to="photos" tag="li">
        <p>相册</p>
      </router-link>
      <router-link to="zhaopian" tag="li">
        <p>照片</p>
      </router-link>
      <router-link to="videochat" tag="li">
        <p>视频</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Divider } from 'vant'

Vue.use(Divider)
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.container {
  overflow: auto;
  .content {
    overflow: auto;
  }
  .pho {
    @include rect(23.44rem,2.31rem);
    @include flexbox();
    @include justify-content();
    position: fixed;
    top: 39.5rem;
    @include background-color(#fff);
    li {
      @include rect(2.94rem,2.31rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      margin: 0 0.5rem;
      p {
        @include font-size(0.88rem);
        @include color(#101010);
      }
    }
  }
}
.test-enter {
  transform: translateX(100%);
}
.test-enter-active {
  transition: all 0.1s;
}
.test-enter-to, .test-leave {
  transform: translateX(0);
}
.test-leave-to {
  transform: translateX(100%)
}
.test-leave-active {
  transition: all 0;
}
</style>
