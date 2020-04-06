<template>
  <bottom class="bottom">
    <ul>
      <router-link to="/photos" tag="li">
        <p>相册</p>
      </router-link>
      <router-link to="" tag="li">
        <p>照片</p>
      </router-link>
      <router-link to="" tag="li">
        <p>视频</p>
      </router-link>
    </ul>
  </bottom>
</template>

<style lang="scss">
@import '@/lib/reset.scss';

 .bottom {
    @include rect(100%, 2.33rem);
    @include background-color(#fff);
    ul {
      @include flexbox();
      @include rect(100%, 2.33rem);
      @include justify-content();
      li {
        @include rect(2.94rem,2.31rem);
        // @include flex();
        @include flexbox();
        @include justify-content();
        @include align-items();
        margin: 0 0.5rem;
        p{
          @include font-size(0.8rem);
        }
        &.router-link-active{
          @include color(#f66);
        }
      }
    }
  }
</style>