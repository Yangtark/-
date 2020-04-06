<template>
  <div class="content">
    <div class="top-early">
      <router-link class="iconfont icon-leftn" to="/course" tag="i"></router-link>
      <p>早教启蒙</p>
      <span></span>
    </div>
    <ul class="early-2">
      <li class="early-2-1" v-for="item of prolist" :key="item.id">
        <div class="early-img">
          <img :src="item.images.small" alt="">
        </div>
        <div class="early-2-2">
          <p>{{ item.title }}</p>
          <span>{{ item.subtype }}</span>
          <!-- <p>59.9元</p> -->
          <div class="btnst">
            {{ item.year }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      prolist: []
    }
  },
  mounted () {
    axios.get('https://www.daxunxun.com/douban').then(res => {
      console.log(res.data) // 请求数据成功
      this.prolist = res.data
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top-early {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F8F8F8);
  position: fixed;
  z-index: 2;
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
.early-2 {
  @include rect(20.88rem,20.2rem);
  @include flexbox();
  @include flex-direction(column);
  padding-left: 2rem;
  margin-top: 2.81rem;
  .early-2-1 {
    @include rect(20.88rem,6.25rem);
    @include flexbox();
    margin-top: 1rem;
    margin-bottom: 1rem;
    .early-img {
      @include rect(6.25rem,6.25rem);
      border: 1px solid #ccc;
      text-align: center;
      line-height: 6.25rem;
      @include font-size(1rem);
      img {
        @include rect(6.25rem,6.25rem);
      }
    }
    .early-2-2 {
      @include rect(14rem,auto);
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
