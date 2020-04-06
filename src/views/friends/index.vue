<template>
  <div class="content">
    <div class="top-friends">
      <router-link class="iconfont icon-leftn" to="/note" tag="i"></router-link>
      <p>亲友团</p>
      <span>修改关系</span>
    </div>
    <div class="fri-t">
      <div class="fri-t-1">
        <div class="fr-1">
          <img src="" alt="">
        </div>
        <p>妈妈（我）</p>
      </div>
      <div class="fri-t-1">
        <div class="fr-1">
          <img src="" alt="">
        </div>
        <p>爸爸</p>
      </div>
    </div>
    <div class="pick">
      <p>你还可以邀请</p>
      <ul class="fri-list">
        <li><p>爷爷</p></li>
        <li><p>奶奶</p></li>
        <li><p>姥姥</p></li>
        <li><p>姥爷</p></li>
        <li><p>爷爷</p></li>
        <li><p>奶奶</p></li>
        <li><p>姥姥</p></li>
        <li><p>姥爷</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top-friends {
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
    padding-left: 3.3rem;
  }
  span {
    @include rect(5rem,1.56rem);
    text-align: center;
    line-height: 1.56rem;
    @include font-size(0.88rem);
    @include color(#c5c5c5);
    padding-right: 1rem;
  }
}
.fri-t {
  @include rect(23.44rem,10.25rem);
  @include flexbox();
  @include background-color(#F4F2F2);
  @include justify-content();
  @include align-items();
  margin-top: 2.81rem;
  .fri-t-1 {
    @include rect(6.69rem,7.44rem);
    @include flexbox();
    @include flex-direction(column);
    @include align-items();
    .fr-1 {
      @include rect(4.31rem,4.31rem);
      @include background-color(#fff);
      border-radius: 50%;
    }
    p {
      @include rect(6.69rem,3.13rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      @include font-size(1rem);
      @include color(#535353);
    }
  }
}
.pick {
  @include rect(23.44rem,12.5rem);
  @include background-color(#F4F2F2);
  margin-top: 0.8rem;
  p {
    @include rect(8.75rem,3.13rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include font-size(0.88rem);
    @include color(#777);
  }
  .fri-list {
    @include rect(23.44rem,8rem);
    @include flexbox();
    flex-wrap: wrap;
    li {
      @include rect(3.75rem,3.75rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      border-radius: 50%;
      border: 1px solid #bbb;
      @include background-color(#fff);
      margin: 0.3rem 1rem;
    }
  }
}
</style>
