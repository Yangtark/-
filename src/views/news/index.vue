<template>
  <div class="content">
   <header>
      <van-nav-bar
        title="评论与赞"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <van-card
      desc="宝宝最新活动来袭,快来参加赢好礼,收拾收拾"
      title="社区助手"
      price="2019-09-02"
      currency=""
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
    <van-card
      desc="宝宝最新活动来袭,快来参加赢好礼,收拾收拾"
      title="仙女妈妈"
      price="2019-09-01"
      currency=""
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
    <van-card
      desc="宝宝最新活动来袭,快来参加赢好礼,收拾收拾"
      title="超级奶爸"
      price="2019-09-01"
      currency=""
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Card } from 'vant'

Vue.use(NavBar)
Vue.use(Card)

export default {
  methods: {
    onClickLeft () {
      this.$router.replace('home') // this.$router.replace('home')this.$router.go(-1) // 返回上一层
    }
  }
}
</script>

<style>
.van-image__img {
  border-radius: 50%
}
.van-card__title {
  max-height: 50px;
  line-height: 24px;
  font-size: 18px;
  font-weight: 600;
}
.van-card__desc {
  font-size: 16px;
}
.van-card__price {
  color: #7d7e80;
}
</style>
