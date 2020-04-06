<template>
  <div class="content">
    <div class="top-growth">
      <router-link class="iconfont icon-leftn" to="/note" tag="i"></router-link>
      <p>成长记录</p>
      <span>添加</span>
    </div>
    <ul class="growth-list">
      <li>
        <p>2018.10.31</p>
        <div class="growth-file">
          <p>身高  50cm</p>
          <p>体重  10kg</p>
          <p>宝宝身高体重在标准之内哦</p>
        </div>
      </li>
      <li>
        <p>2018.11.01</p>
        <div class="growth-file">
          <p>身高  51cm</p>
          <p>体重  10kg</p>
          <p>宝宝长得好快呀</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top-growth {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F8F8F8);
  position: fixed;
  i {
    @include rect(1.7rem,1.8rem);
    @include font-size(1.5rem);
    padding-left: 1rem;
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
.growth-list {
  @include rect(21rem,auto);
  @include flexbox();
  @include flex-direction(column);
  // margin-top: 2.81rem;
  margin: 3.81rem auto 0 auto;
  li {
    @include rect(21rem,7rem);
    margin-bottom: 1.5rem;
    p {
      @include font-size(0.88rem);
      @include color(#777);
      padding-bottom: 0.1rem;
    }
    .growth-file {
      @include rect(21rem,5.19rem);
      @include background-color(#F2F1F1);
      margin-top: 0.5rem;
      padding: 0.5rem 0 0 0.7rem;
      border-radius: 10px;
    }
  }
}
</style>
