<template>
  <div class="content">
    <div class="pro-img">
      <img src="" alt="">
      <router-link class="iconfont icon-leftn" to="/course" tag="i"></router-link>
    </div>
    <div class="pro-cont">
      <div class="pro-l">
        <p>早教启蒙</p>
        <span>50人已买</span>
      </div>
      <div class="pro-c">
        <p>XXX主讲</p>
      </div>
      <div class="pro-r">
        <p>咨询客服</p>
      </div>
    </div>
    <div class="jieshao">
      <p>介绍</p>
    </div>
    <div class="pro-onimg">
      <img src="../../images/ceshi2.png" alt="">
    </div>
    <div class="pro-txt">
      <p>
        从婴幼儿发展规律特点出发，将科学的视频课程和专业的教具相结合，
        一站式解决家长在家早教的所有难题。精心策划五大课程，更科学的培养体系，
        全方面发展孩子的五大能力。
      </p>
    </div>
    <ul class="pro-list">
        <li class="pro-item1">咨询</li>
        <li class="pro-item2">试看</li>
        <li class="pro-item3">
          <p>立即购买</p>
          <p>99.9元</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';

.pro-img {
  @include rect(23.44rem,7.5rem);
  @include background-color(#E8E8E8);
  position: fixed;
}
.icon-leftn {
    @include rect(1.7rem,1.8rem);
    @include font-size(1.8rem);
    font-weight: 900;
    @include color(#c5c5c5);
    position: absolute;
    left: 1rem;
    top: 0.4rem;
}
.pro-cont {
  @include rect(23.44rem,6rem);
  @include flexbox();
  @include justify-content(space-between);
  padding: 0 1.5rem;
  margin-top: 7.5rem;
  .pro-l {
    @include rect(5rem,6rem);
    @include flexbox();
    @include flex-direction(column);
    @include justify-content();
    @include align-items();
    p {
      @include font-size(1.25rem);
      @include color(#101010);
      margin-top: 1rem;
    }
    span {
      @include font-size(0.88rem);
      @include color(#101010);
      padding-top: 1.5rem;
    }
  }
  .pro-c {
    @include rect(3.7rem,6rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    p {
      @include font-size(0.88rem);
      @include color(#101010);
    }
  }
  .pro-r {
    @include rect(3.7rem,6rem);
    @include flexbox();
    @include justify-content(flex-end);
    @include align-items(flex-end);
    p {
      @include font-size(0.88rem);
      @include color(#c5c5c5);
    }
  }
}
.jieshao {
  @include rect(23.44rem,2.5rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  @include background-color(#e5e5e5);
  margin-top: 0.5rem;
  p {
    @include font-size(0.88rem);
    @include color(#101010);
  }
}
.pro-onimg {
  @include rect(20.88rem,7.5rem);
  margin: 1.2rem;
  img {
    @include rect(20.88rem,7.5rem);
  }
}
.pro-txt {
  @include rect(17.5rem,9.38rem);
  margin-left: 3rem;
  @include border(1px solid #ccc);
  padding: 0.5rem 0.5rem;
  p {
    @include font-size(0.88rem);
    @include color(#888);
    text-indent: 2rem;
  }
}
.pro-list {
  @include rect(20.88rem,1.88rem);
  @include flexbox();
  margin: 3rem 0 1.2rem 1rem;
  .pro-item1 {
    @include rect(3.69rem,1.88rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include background-color(#dadadc);
    @include font-size(0.88rem);
    @include color(#101010);
  }
  .pro-item2 {
    @include rect(3.69rem,1.88rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include background-color(#dadadc);
    @include font-size(0.88rem);
    @include color(#101010);
  }
  .pro-item3 {
    @include rect(13.55rem,1.88rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include border(1px solid #ccc);
    p {
      @include font-size(0.88rem);
      @include color(#101010);
      padding-right: 1rem;
    }
  }
}
</style>
