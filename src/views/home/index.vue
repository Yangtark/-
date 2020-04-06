<template>
  <div class="content">
    <div class="top-home">
      <form>
        <input type="text" placeholder="搜索" class="search" />
      </form>
      <a href="news">
        <div class="news" >消息</div>
      </a>
    </div>
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="banner-home">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in bannerlist" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <main>
      <div class="box">
        <b>免费专区</b>
        <span>新鲜有趣的内容</span>
        <van-card
          desc="宝宝如何吃得好，这几件事不要做"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          thumb-link="course"
        />
        <van-icon name="arrow" class="arrow" />
      </div>
      <div class="box">
        <b>好课精选</b>
        <span>总有一款适合你</span>
        <van-card
          desc="每天一小时，如何提升宝贝认知能力"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          thumb-link="course"
        />
        <van-tag size="large" class="tag1">免费试听</van-tag>
        <van-card
          desc="每天一小时，如何提升宝贝饮食"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          thumb-link="course"
        />
        <van-tag size="large" class="tag2">免费试听</van-tag>
      </div>
      <a href="coupon"><div class="box">
        <b>精彩活动</b>
        <span>活动抽奖</span>
        <div class="sign">
          <p>签到积分换会员</p>
          <span>积分换会员</span>
          <span>积分换会员</span>
        </div>
        <van-icon name="arrow" class="arrow" />
      </div></a>
      <div class="box">
      <a href="community">
        <b>热门话题</b>
        <van-notice-bar class="notice"
          text="大家都在干什么：万圣节第一波照片/万恶的淘宝节/开始剁手"
          left-icon="volume-o"
        />
        <van-card
          desc="热门话题"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          thumb-link="/community/hot"
        /></a>
      </div>
    </main>
    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// import axios from 'axios'
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, List, PullRefresh, Icon, Card, Tag, NoticeBar } from 'vant'
import { mapState } from 'vuex'

Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Tag)
Vue.use(NoticeBar)
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      count: 0,
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      bannerlist: ({ home: { bannerlist } }) => bannerlist
    })
  },
  mounted () {
    this.$store.dispatch('getBannerList')
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    onRefresh () {
      setTimeout(() => {
        // this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>

<style lang="scss">
.top-home {
  background-color: #F8F8F8;
  width: 100%;
  height: 2.81rem;
  z-index: 5;
  position: fixed;
  .search {
    padding: 0 .8rem;
    display: block;
    width: 16.56rem;
    height: 1.88rem;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    text-align: left;
    font-family: Microsoft Yahei;
    font-size: 0.81rem;
    position: absolute;
    top: 0.5rem;
    left:1.25rem;
  }
  .news {
    width: 3.38rem;
    position:absolute;
    height: 1.88rem;
    top: 0.5rem;
    left: 18.75rem;
    border-radius: .38rem;
    font-size: .88rem;
    background: #fff;
    font-family: Microsoft Yahei;
    text-align: center;
    line-height: 1.88rem;
    color: #101010;
    border: 1px solid #ccc;
  }
}
.banner-home {
  margin-top: 2.81rem;
  width: 100%;
  height: 12.5rem;
  overflow: hidden;
  .van-swipe {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 12.5rem;
    }
  }
}
.box {
  position: relative;
  margin-top: 0.5rem;
  width: 21.44rem;
  margin: 0.5rem auto 0 auto;
  b {
    left: 19px;
    top: 280px;
    width: 64px;
    height: 22px;
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  span {
    left: 91px;
    top: 281px;
    width: 98px;
    height: 20px;
    color: rgba(197, 197, 197, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  .van-card {
    border: 1px solid #ccc;
  }
  .arrow {
    display: block;
    position: absolute;
    top: 70px;
    right: 30px;
    font-size: 30px;
    color: #ccc;
  }
  .tag1 {
    display: block;
    position: absolute;
    top: 80px;
    left: 230px;
    height: 30px;
    background-color: #ccc;
    color: black;
    text-align: center;
  }
  .tag2 {
    display: block;
    position: absolute;
    top: 200px;
    left: 230px;
    height: 30px;
    background-color: #ccc;
    color: black;
    text-align: center;
  }
  .sign {
    position: relative;
    box-sizing: border-box;
    padding: 18px 16px;
    color: #323233;
    background-color: #fafafa;
    height: 106px;
    p {
      font-size: 22px;
    }
    span {
      font-size: 16px;
    }
  }
  .notice {
    color: #000;
    background-color: #fafafa;
  }
}
</style>
