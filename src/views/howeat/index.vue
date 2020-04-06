<template>
  <div class="content">
    <div class="top-howeat">
      <router-link class="iconfont icon-leftn" to="/living" tag="i"></router-link>
      <p>能不能吃</p>
      <span></span>
    </div>
    <div class="put">
      <input type="text" placeholder="请输入...">
      <div class="sousuo">
        <p>搜索</p>
      </div>
    </div>
    <ul class="howeat-list">
      <li>
        <p>主食</p>
      </li>
      <li>
        <p>蔬菜</p>
      </li>
      <li>
        <p>水果</p>
      </li>
      <li>
        <p>肉蛋</p>
      </li>
      <li>
        <p>零食饮料</p>
      </li>
      <li>
        <p>海鲜</p>
      </li>
      <li>
        <p>豆乳品</p>
      </li>
      <li>
        <p>调料</p>
      </li>
      <li>
        <p>补品中药</p>
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

.top-howeat {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F8F8F8);
  position: fixed;
  z-index: 1;
  i {
    @include rect(1.7rem,1.8rem);
    @include font-size(1.5rem);
    @include color(#c5c5c5);
    padding-left: 1rem;
    font-weight: 600;
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
.put {
  @include rect(20.75rem,2.5rem);
  // margin-top: 3.3rem;
  margin: 3.3rem auto 0 auto;
  position: relative;
  input {
    @include rect(20.75rem,2.5rem);
    border-radius: 5px;
    border: 1px solid #ccc;
    @include font-size(0.88rem);
    text-indent: 0.7rem;
    @include color(#888);
  }
  .sousuo {
    @include rect(3.13rem,2.3rem);
    // border: 1px solid #ccc;
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include background-color(#fff);
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    p {
      @include font-size(0.88rem);
      @include color(#101010);
    }
  }
}
.howeat-list {
  @include rect(23.44rem,auto);
  @include flexbox();
  flex-wrap: wrap;
  margin-top: 3rem;
  li {
    @include rect(6.25rem,6.25rem);
    @include background-color(#d9d9d9);
    @include flexbox();
    @include justify-content();
    @include align-items();
    margin: 0.7rem auto;
    border-radius: 7px;
    p {
      @include font-size(0.88rem);
      @include color(#101010);
    }
  }
}
</style>
