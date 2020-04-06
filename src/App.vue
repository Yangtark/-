<template>
  <div id="app">
    <router-view name="header"></router-view>
    <transition name="test">
    <router-view></router-view>
    </transition>
   <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss'; // @代表src

html, body, #app {
  @include rect(100%, 100%);
}

#app {
  @include flexbox();
  @include flex-direction(column);
  .header {
    @include flexbox();
    @include rect(23.44rem,1.25rem);
    @include justify-content(space-between);
    @include background-color(#F8F8F8);
    @include border(1px,solid,#fff);
    span {
      @include font-size(14px);
    }
  }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto);
    }
    .footer {
    @include rect(100%, 2.33rem);
    @include background-color(#E6DFDF);
    ul {
      @include flexbox();
      @include rect(100%, 2.33rem);
      li {
        @include flex();
        @include flexbox();
        @include justify-content();
        @include align-items();
        p{
          @include font-size(0.8rem);
        }
        &.router-link-active{
          @include color(#f66);
        }
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
