<template>
<div class="container">
  <ul class="list1">
      <router-link to="/community/concern" tag="li">
        <p>关注</p>
      </router-link>
      <router-link to="/community/hot" tag="li">
        <p>热门</p>
      </router-link>
      <router-link to="/mine" tag="li">
        <p>我的</p>
      </router-link>
  </ul>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.container {
  overflow: auto;
}
.list1 {
  @include rect(23.44rem,2.31rem);
  @include flexbox();
  @include justify-content();
  @include background-color(#fff);
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid #ccc;
  li {
    @include rect(2.94rem,2.31rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    p {
      @include font-size(0.88rem);
      @include color(#101010);
    }
  }
}
</style>
