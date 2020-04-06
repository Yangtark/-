<template>
  <div class="content">
    <div class="top-babyheal">
      <router-link class="iconfont icon-leftn" to="/course" tag="i"></router-link>
      <p>宝贝健康</p>
      <span></span>
    </div>
    <ul class="babyheal-2">
      <li class="babyheal-2-1">
        <div class="babyheal-img">
          <img src="" alt="">
          讲师图
        </div>
        <div class="babyheal-2-2">
          <p>每天一小时，如何提升宝贝....</p>
          <span>XXX讲师</span>
          <!-- <p>59.9元</p> -->
          <div class="btnst">
            99.9元
          </div>
        </div>
      </li>
      <li class="babyheal-2-1">
        <div class="babyheal-img">
          <img src="" alt="">
          讲师图
        </div>
        <div class="babyheal-2-2">
          <p>每天一小时，如何提升宝贝....</p>
          <span>XXX讲师</span>
          <!-- <p>59.9元</p> -->
          <div class="btnst">
            99.9元
          </div>
        </div>
      </li>
      <li class="babyheal-2-1">
        <div class="babyheal-img">
          <img src="" alt="">
          讲师图
        </div>
        <div class="babyheal-2-2">
          <p>每天一小时，如何提升宝贝....</p>
          <span>XXX讲师</span>
          <!-- <p>59.9元</p> -->
          <div class="btnst">
            99.9元
          </div>
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

.top-babyheal {
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
.babyheal-2 {
  @include rect(20.88rem,20.2rem);
  @include flexbox();
  @include flex-direction(column);
  padding-left: 1.5rem;
  margin-top: 2.81rem;
  .babyheal-2-1 {
    @include rect(20.88rem,6.25rem);
    @include flexbox();
    margin-top: 1rem;
    margin-bottom: 1rem;
    .babyheal-img {
      @include rect(6.25rem,6.25rem);
      border: 1px solid #ccc;
      text-align: center;
      line-height: 6.25rem;
      @include font-size(1rem);
      img {
        @include rect(6.25rem,6.25rem);
      }
    }
    .babyheal-2-2 {
      padding: 1rem 1.4rem 0 1.5rem;
      @include flexbox();
      @include flex-direction(column);
      border: 1px solid #e8e8e8;
      position: relative;
      p {
        @include font-size(0.88rem);
      }
      span {
        @include font-size(0.88rem);
        padding-top: 1rem;
      }
      .btnst {
        @include rect(6rem,2.2rem);
        border: 1px solid #B2B2B2;
        @include font-size(0.88rem);
        text-align: center;
        line-height: 2.2rem;
        border-right: none;
        position: absolute;
        right: 0;
        top: 3.3rem;
      }
    }
  }
}
</style>
