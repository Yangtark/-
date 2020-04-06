<template>
  <div class="content">
    <div class="top-living">
      <router-link class="iconfont icon-leftn" to="/course" tag="i"></router-link>
      <p>生活知识</p>
      <span></span>
    </div>
    <div class="banner-living">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in bannerlist" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <ul class="liv-list">
      <router-link to="/howeat" tag="li">
        <div class="liv-item"><img src="" alt=""></div>
        <p>能不能吃</p>
      </router-link>
      <router-link to="/recipe" tag="li">
        <div class="liv-item"><img src="" alt=""></div>
        <p>食谱</p>
      </router-link>
      <router-link to="/listening" tag="li">
        <div class="liv-item"><img src="" alt=""></div>
        <p>听听</p>
      </router-link>
    </ul>
    <ul class="life-list">
      <li class="life-item">
        <div class="empty"></div>
        <p>每日食谱</p>
          <ul class="life-ul">
            <li class="life-li">
              <router-link class="life-img" to="/recipe" tag="div"><img src="" alt=""></router-link>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <router-link class="life-img" to="/recipe" tag="div"><img src="" alt=""></router-link>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <router-link class="life-img" to="/recipe" tag="div"><img src="" alt=""></router-link>
              <span>虾仁玉米羹</span>
            </li>
          </ul>
      </li>
      <li class="life-item">
        <div class="empty"></div>
        <p>能不能吃</p>
          <ul class="life-ul">
            <li class="life-li">
              <router-link class="life-img" to="/howeat" tag="div"><img src="" alt=""></router-link>
              <span>西瓜</span>
            </li>
            <li class="life-li">
              <router-link class="life-img" to="/howeat" tag="div"><img src="" alt=""></router-link>
              <span>西瓜</span>
            </li>
            <li class="life-li">
              <router-link class="life-img" to="/howeat" tag="div"><img src="" alt=""></router-link>
              <span>西瓜</span>
            </li>
          </ul>
      </li>
      <li class="life-item">
        <div class="empty"></div>
        <p>听听</p>
          <ul class="life-ul">
            <li class="life-li">
              <router-link class="life-img" to="/listening" tag="div"><img src="" alt=""></router-link>
              <span>绘本故事</span>
            </li>
            <li class="life-li">
              <router-link class="life-img" to="/listening" tag="div"><img src="" alt=""></router-link>
              <span>采蘑菇</span>
            </li>
            <li class="life-li">
              <router-link class="life-img" to="/listening" tag="div"><img src="" alt=""></router-link>
              <span>找朋友</span>
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
import { mapState } from 'vuex'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)

export default {
  computed: {
    ...mapState({
      bannerlist: ({ living: { bannerlist } }) => bannerlist
    })
  },
  mounted () {
    this.$store.dispatch('getBannerList')
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top-living {
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
.banner-living {
  @include rect(100%,8.13rem);
  @include overflow(hidden);
  margin-top: 2.81rem;
  .van-swipe {
    @include rect(100%,8.13rem);
    @include background-color(#e8e8e8);
    .van-swipe-item {
      text-align: center;
      line-height: 8.13rem;
      @include font-size(2rem);
      @include color(#f00);
    }
    img {
      @include rect(100%,8.13rem);
      @include border(1px,solid,#000);
    }
    .van-swipe__indicator {
      @include rect(0.5rem,0.5rem);
      @include background-color(#fff);
      border-radius: 4px;
      border: 1px solid #444444;
    }
  }
}
.liv-list {
  @include  rect(23.444rem,6.13rem);
  @include flexbox();
  @include justify-content(space-between);
  padding: 0.8rem 2rem;
  li {
    @include rect(3.6rem,6.13rem);
    @include flexbox();
    @include flex-direction(column);
    @include align-items();
    .liv-item {
      @include rect(3.31rem,3.31rem);
      border: 1px solid #bbb;
      border-radius: 50%;
    }
    p {
      @include rect(3.6rem,1.25rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      @include font-size(0.88rem);
      margin-top: 0.5rem;
    }
  }
}
.life-list {
  @include rect(23.44rem,auto);
  .life-item {
    @include rect(23.44rem,auto);
    .empty {
      @include rect(23.44rem,1.25rem);
      @include background-color(#E5E5E5);
    }
    p {
      @include rect(4rem,1.38rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      margin: 1rem 1rem;
      @include font-size(1rem);
      @include color(#101010);
    }
    .life-ul {
      @include rect(22.5rem,8rem);
      @include flexbox();
      margin: 1rem 1rem;
      .life-li {
        @include rect(6.25rem,8rem);
        @include flexbox();
        @include flex();
        @include flex-direction(column);
        .life-img {
          @include rect(6.25rem,5rem);
          border: 1px solid #ccc;
        }
        span {
          @include rect(4.4rem,1.25rem);
          @include font-size(0.88rem);
          @include color(#101010);
          margin-top: 0.8rem;
        }
      }
    }
  }
}
</style>
