<template>
  <div class="content" id="content">
    <div class="top">
      <p>课程</p>
    </div>
    <div class="btn" @click='onSearch'>
      搜索
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in bannerlist" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
      </van-swipe>
    </div>
    <ul class="list">
      <router-link to="/early" tag="li">
        <img src="" alt="">
        <p>早教启蒙</p>
      </router-link>
      <router-link to="/family" tag="li">
        <img src="" alt="">
        <p>家庭教育</p>
      </router-link>
      <router-link to="/healthy" tag="li">
        <img src="" alt="">
        <p>宝宝健康</p>
      </router-link>
      <router-link to="/living" tag="li">
        <img src="" alt="">
        <p>生活知识</p>
      </router-link>
    </ul>
    <div class="less-1">
      <router-link class="less-1-1" to="/prodoct" tag="div">
        <div class="less-img">
          <img :src="prolist1.images" alt="">
        </div>
        <div class="less-1-2">
          <p>{{ prolist1.title }}</p>
          <span>{{ prolist1.subtype }}</span>
          <p>{{ prolist1.year }}</p>
          <div class="btnst">
            {{ prolist1.id }}
          </div>
        </div>
      </router-link>
      <router-link class="less-1-1" to="/prodoct" tag="div">
        <div class="less-img">
          <img src="" alt="">
        </div>
        <div class="less-1-2">
          <p>{{ prolist1.title }}</p>
          <span>{{ prolist1.subtype }}</span>
          <p>{{ prolist1.year }}</p>
          <div class="btnst">
            {{ prolist1.id }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="less-2">
      <div class="less-top">
        早期启蒙
      </div>
      <router-link class="less-2-1" to="/prodoct" tag="div">
        <div class="less-img">
          <img src="" alt="">
        </div>
        <div class="less-2-2">
          <p>{{ prolist2.title }}</p>
          <span>{{ prolist2.subtype }}</span>
          <p>{{ prolist2.year }}</p>
          <div class="btnst">
            {{ prolist2.id }}
          </div>
        </div>
      </router-link>
      <router-link class="less-2-1" to="/prodoct" tag="li">
        <div class="less-img">
          <img src="" alt="">
        </div>
        <div class="less-2-2">
          <p>{{ prolist2.title }}</p>
          <span>{{ prolist2.subtype }}</span>
          <p>{{ prolist2.year }}</p>
          <div class="btnst">
            {{ prolist2.id }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="less-2">
      <div class="less-top">
        家庭教育
      </div>
      <router-link class="less-2-1" to="/family" tag="div">
        <div class="less-img">
          <img src="" alt="">
        </div>
        <div class="less-2-2">
          <p>{{ prolist3.title }}</p>
          <span>{{ prolist3.subtype }}</span>
          <p>{{ prolist3.year }}</p>
          <div class="btnst">
            {{ prolist3.id }}
          </div>
        </div>
      </router-link>
      <router-link class="less-2-1" to="/family" tag="div">
        <div class="less-img">
          <img src="" alt="">
        </div>
        <div class="less-2-2">
          <p>{{ prolist3.title }}</p>
          <span>{{ prolist3.subtype }}</span>
          <p>{{ prolist3.year }}</p>
          <div class="btnst">
            {{ prolist3.id }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="less-2">
      <div class="less-top">
        宝贝健康
      </div>
      <router-link class="less-2-1" to="/babyhealthy" tag="div">
        <div class="less-img">
          <img src="" alt="">
        </div>
        <div class="less-2-2">
          <p>{{ prolist4.title }}</p>
          <span>{{ prolist4.subtype }}</span>
          <p>{{ prolist4.year }}</p>
          <div class="btnst">
            {{ prolist4.id }}
          </div>
        </div>
      </router-link>
      <router-link class="less-2-1" to="/babyhealthy" tag="div">
        <div class="less-img">
          <img src="" alt="">
        </div>
        <div class="less-2-2">
          <p>{{ prolist4.title }}</p>
          <span>{{ prolist4.subtype }}</span>
          <p>{{ prolist4.year }}</p>
          <div class="btnst">
            {{ prolist4.id }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="less-3">
      <router-link class="less-top" to="/living" tag="div">
        生活知识
      </router-link>
      <div class="less-3-1">
        <p>食谱</p>
        <router-link class="less-3-2" to="/recipe" tag="div">
          <p>宝宝吃的好</p>
          <div class="less-text1">去学习</div>
        </router-link>
      </div>
      <div class="less-3-3">
        <p>听听</p>
        <router-link class="less-3-4" to="/listening" tag="div">
          <p>儿童好听的歌曲</p>
          <div class="less-text2">去听听</div>
        </router-link>
      </div>
    </div>
    <div class="backtop" @click="backTop" v-show="flag">
      <van-icon name="upgrade" size="35px" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, Icon } from 'vant'
import { mapState } from 'vuex'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Icon)

export default {
  data () {
    return {
      flag: true,
      // prolist: [],
      prolist1: [],
      prolist2: [],
      prolist3: [],
      prolist4: []
    }
  },
  computed: {
    ...mapState({
      bannerlist: ({ course: { bannerlist } }) => bannerlist
    })
  },
  methods: {
    onSearch () {
      this.$router.replace('/search')
    },
    backTop () {
      // document.querySelector('.content').scrollTop = 0
      let timer
      timer = setInterval(() => {
        if (document.getElementById('content').scrollTop === 0) {
          clearInterval(timer) // 当滚动距离为0时，清除计时器
        } else { // 否则就每20毫秒滚动200px
          document.getElementById('content').scrollTop -= 200
        }
      }, 20)
    },
    scrollToTop () {
      let scrollTop = document.getElementById('content').scrollTop
      if (scrollTop > 200) {
        // 显示回到顶部
        this.flag = true
      } else {
        // 隐藏回到顶部
        this.flag = false
      }
    },
    beforeRouteLeave (to, from, next) {
      document.getElementById('content').removeEventListener('scroll', this.scrollToTop)
      next()
    }
  },
  mounted () {
    return new Promise((resolve, reject) => {
      axios.get('https://www.daxunxun.com/douban').then(res => {
        console.log(res.data) // 请求数据成功
        this.prolist1 = res.data[0]
        this.prolist2 = res.data[1]
        this.prolist3 = res.data[2]
        this.prolist4 = res.data[3]
      })
      this.$store.dispatch('getBannerList')
    })
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  @include background-color(#F8F8F8);
  position: fixed;
  z-index: 1;
  p {
    @include font-size(1.13rem);
  }
}
.btn {
  @include rect(2.81rem,1.88rem);
  @include background-color(#CAD1D5);
  text-align: center;
  line-height: 1.88rem;
  @include font-size(0.88rem);
  position: fixed;
  left: 19.38rem;
  top: 1.69rem;
  z-index: 5;
}
.banner {
  @include rect(100%,12.5rem);
  @include overflow(hidden);
  margin-top: 2.81rem;
  .van-swipe {
    @include rect(100%,12.5rem);
    .van-swipe-item {
      line-height: 12.5rem;
    }
    img {
      @include rect(100%,12.5rem);
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
.list {
  @include rect(23.44rem,6rem);
  @include flexbox();
  li {
    @include flex();
        // 元素水平垂直居中
    @include flexbox();
    @include flex-direction(column);
    @include justify-content();
    @include align-items();
    img {
      @include rect(3.13rem,3.13rem);
      border-radius: 50%;
      margin-bottom: 0.5rem;
      border: 1px solid #ccc;
    }
    p {
      @include font-size(0.88rem);
    }
  }
}
.less-1 {
  @include rect(20.88rem,14rem);
  @include flexbox();
  @include flex-direction(column);
  padding-left: 1.5rem;
  margin-top: 1rem;
  .less-1-1 {
    @include rect(20.88rem,6.25rem);
    @include flexbox();
    margin-bottom: 1rem;
    .less-img {
      @include rect(6.25rem,6.25rem);
      border: 1px solid #ccc;
      img {
        @include rect(6.25rem,6.25rem);
      }
    }
    .less-1-2 {
      @include rect(14rem,auto);
      padding: 1rem 1rem 0 1.5rem;
      @include flexbox();
      @include flex-direction(column);
      border: 1px solid #e8e8e8;
      position: relative;
      p {
        @include rect(11.66rem,auto);
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
.less-2 {
  @include rect(20.88rem,20.2rem);
  @include flexbox();
  @include flex-direction(column);
  padding-left: 1.5rem;
  margin-top: 1rem;
  .less-top {
    @include rect(20.94rem,3.13rem);
    @include font-size(0.88rem);
    text-align: center;
    line-height: 3.13rem;
    @include background-color(#E5E5E5);
    margin: 1rem 0 1rem 0;
  }
  .less-2-1 {
    @include rect(14rem,auto);
    @include rect(20.88rem,6.25rem);
    @include flexbox();
    margin-top: 1rem;
    margin-bottom: 1rem;
    .less-img {
      @include rect(6.25rem,6.25rem);
      border: 1px solid #ccc;
      img {
        @include rect(6.25rem,6.25rem);
      }
    }
    .less-2-2 {
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
.less-3 {
  @include rect(20.88rem,20.2rem);
  @include flexbox();
  @include flex-direction(column);
  padding-left: 1.5rem;
  margin-top: 1rem;
  .less-top {
    @include rect(20.94rem,3.13rem);
    @include font-size(0.88rem);
    text-align: center;
    line-height: 3.13rem;
    @include background-color(#E5E5E5);
    margin: 1rem 0 1rem 0;
  }
  .less-3-1 {
    @include rect(20.88rem,5.81rem);
    @include flexbox();
    @include flex-direction(column);
    p {
      @include font-size(1rem);
      @include color(#101010);
    }
    .less-3-2 {
      @include rect(20.88rem,3.81rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      border: 1px solid #bbb;
      margin-top: 0.5rem;
      border-radius: 10px;
      position: relative;
      p {
        @include font-size(0.88rem);
      }
      .less-text1 {
        @include rect(4.81rem,2.06rem);
        @include font-size(0.88rem);
        border: 1px solid #bbb;
        border-radius: 5px;
        text-align: center;
        line-height: 2.06rem;
        position: absolute;
        right: 0.5rem;
      }
    }
  }
  .less-3-3 {
    @include rect(20.88rem,5.81rem);
    @include flexbox();
    @include flex-direction(column);
    margin-top: 1rem;
    p {
      @include font-size(1rem);
      @include color(#101010);
    }
    .less-3-4 {
      @include rect(20.88rem,3.81rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      border: 1px solid #bbb;
      margin-top: 0.5rem;
      border-radius: 10px;
      position: relative;
      p {
        @include font-size(0.88rem);
      }
      .less-text2 {
        @include rect(4.81rem,2.06rem);
        @include font-size(0.88rem);
        border: 1px solid #bbb;
        border-radius: 5px;
        text-align: center;
        line-height: 2.06rem;
        position: absolute;
        right: 0.5rem;
      }
    }
  }
}
.backtop {
  @include rect(35px,34.4px);
  position: fixed;
  z-index: 5;
  bottom: 3rem;
  right: 1rem;
  background-color: #fff;
  border-radius: 50%;
}
</style>
