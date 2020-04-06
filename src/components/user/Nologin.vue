<template>
    <div class="content">
        <div class="mynologin">我的</div>
        <div class="Img">
          <!-- <van-image
            round
            width="4.5rem"
            height="4.5rem"
            src="https://www.bing.com/th?id=OGC.b049493a3501f77391f19dde89452fcb&pid=1.7&rurl=http%3a%2f%2fwww.86ps.com%2fUploadFiles%2fArticle%2f2012-5%2f2012514940581.jpg&ehk=ARwSWiQsfOJGQTdUHv5DBw"
          /> -->
          <van-loading type="spinner" color="#1989fa" />
          <span>欢迎您,请登录</span>
          <router-link to="/register" tag="button" class="onreset">注册</router-link>
          <router-link to="/login" tag="button" class="onlogin">登录</router-link>
        </div>
        <ul class="tent2">
          <li @click="onAdd">
            <i class="iconfont icon-jiahao"></i>
            <span>添加宝宝</span>
            <b class="iconfont icon-right"></b>
          </li>
          <li>
            <i class="iconfont icon-qiandao"></i>
            <span>我的签到</span>
            <b class="iconfont icon-right"></b>
          </li>
          <li>
            <i class="iconfont icon-wodekecheng"></i>
            <span>我的课程</span>
            <b class="iconfont icon-right"></b>
          </li>
          <li>
            <i class="iconfont icon-shoucang"></i>
            <span>我的收藏</span>
            <b class="iconfont icon-right"></b>
          </li>
          <li>
            <i class="iconfont icon-xiangce"></i>
            <span>相册定制</span>
            <b class="iconfont icon-right"></b>
          </li>
          <li>
            <i class="iconfont icon-yijianfankui"></i>
            <span>意见反馈</span>
            <b class="iconfont icon-right"></b>
          </li>
          <li>
            <i class="iconfont icon-tongyong-shezhi"></i>
            <span>通用设置</span>
            <b class="iconfont icon-right"></b>
          </li>
          <li>
            <i class="iconfont icon-myorder"></i>
            <span>我的订单</span>
            <b class="iconfont icon-right"></b>
          </li>
        </ul>
      </div>
</template>

<script>
import Vue from 'vue'
import { Image, Loading, Toast } from 'vant'

Vue.use(Image)
Vue.use(Loading)
Vue.use(Toast)
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (localStorage.getItem('isLogin') === 'ok') {
        next('/user/login')
      } else {
        next('/user/nologin')
      }
    })
  },
  methods: {
    onAdd () {
      if (localStorage.getItem('isLogin') !== 'ok') {
        Toast('请先登录')
        // return
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.content {
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto);
      .mynologin {
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
          @include color(#888);
          @include padding(0.5rem 0);
        }
        .onreset {
          @include rect(3.5rem,2rem);
          background-color: none;
          border: none;
          font-size: 1rem;
          position: absolute;
          left: 4rem;
        }
        .onlogin {
          @include rect(3.5rem,2rem);
          background-color: none;
          border: none;
          font-size: 1rem;
          position: absolute;
          right: 4rem;
        }
      }
      .tent2 {
        @include flexbox();
        @include rect(21.81rem,auto);
        @include margin(0 0 0 0.85rem);
        @include flex-direction(column);
        li {
          @include flexbox();
          @include padding(0.3rem 0);
          @include justify-content();
          @include align-items();
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
