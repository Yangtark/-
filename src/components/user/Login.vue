<template>
    <div class="content">
        <div class="my">我的</div>
        <div class="Img">
          <van-image
            round
            width="3.5rem"
            height="3.5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <span>小宝妈妈</span>
        </div>
        <ul class="tent">
          <router-link to="/babyinformation" tag="li">
            <i class="iconfont icon-jiahao"></i>
            <span>添加宝宝</span>
            <b class="iconfont icon-right"></b>
          </router-link>
          <router-link to="/coupon" tag="li">
            <i class="iconfont icon-qiandao"></i>
            <span>我的签到</span>
            <b class="iconfont icon-right"></b>
          </router-link>
          <router-link to="/course" tag="li">
            <i class="iconfont icon-wodekecheng"></i>
            <span>我的课程</span>
            <b class="iconfont icon-right"></b>
          </router-link>
          <router-link to="/mycollection" tag="li">
            <i class="iconfont icon-shoucang"></i>
            <span>我的收藏</span>
            <b class="iconfont icon-right"></b>
          </router-link>
          <router-link to="/phonealbum" tag="li">
            <i class="iconfont icon-xiangce"></i>
            <span>相册定制</span>
            <b class="iconfont icon-right"></b>
          </router-link>
          <router-link to="/feedback" tag="li">
            <i class="iconfont icon-yijianfankui"></i>
            <span>意见反馈</span>
            <b class="iconfont icon-right"></b>
          </router-link>
          <router-link to="/settings" tag="li">
            <i class="iconfont icon-tongyong-shezhi"></i>
            <span>通用设置</span>
            <b class="iconfont icon-right"></b>
          </router-link>
          <router-link to="/myorder" tag="li">
            <i class="iconfont icon-myorder"></i>
            <span>我的订单</span>
            <b class="iconfont icon-right"></b>
          </router-link>
        </ul>
      </div>
</template>

<script>
import Vue from 'vue'
import { Image } from 'vant'

Vue.use(Image)
export default {
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.content {
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto);
      .my {
        @include flexbox();
        @include rect(23.44rem,2.81rem);
        @include justify-content();
        @include align-items();
        @include font-size(1.13rem);
        @include background-color(#F8F8F8);
      }
      .Img {
        @include flexbox();
        @include rect(100%,6.8rem);
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        background: url("http://img95.699pic.com/photo/50059/3579.jpg_wh300.jpg");
        span {
          @include font-size(0.88rem);
          @include color(#101010);
          @include padding(0.5rem 0);
        }
      }
      .tent {
        @include flexbox();
        @include rect(21.81rem,auto);
        @include margin(0 0 0 0.85rem);
        @include flex-direction(column);
        li {
          @include padding(0.3rem 0);
          border-bottom: 0.15rem solid #f2f0f0;
          i {
            @include margin(0 1rem 0 1rem);
            @include font-size(1.5rem);
            @include color(#c5c5c5);
          }
          span {
            @include margin(0 13rem 0 0);
            @include font-size(0.88rem);
            @include color(#888);
          }
          b {
            @include color(#E6DFDF);
          }
        }
      }
    }
</style>
