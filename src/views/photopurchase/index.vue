<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="购买"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <div class="img">
      <van-image
        width="12.5rem"
        height="7.5rem"
        fit="contain"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <span>尊享版</span>
    </div>
    <p class="step">
      <span>售价:18元/本</span>
      <van-stepper v-model="value" integer />
    </p>
     <button type="submit" class="submit" @click="onsubmit">确认订单</button>
     <div class="details">
      <span>详情</span>
      <p class="p1">如何上传照片：1.____________________________________________#
      2.____________________________________________#
      3.____________________________________________#
      4.____________________________________________#
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Image, Stepper, Toast } from 'vant'

Vue.use(NavBar)
Vue.use(Image)
Vue.use(Stepper)
Vue.use(Toast)

export default {
  data () {
    return {
      value: 1
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1) // 返回上一层
      // this.$router.replace('user')
    },
    onsubmit () {
      Toast('提交订单成功')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.content {
  @include flex();
  @include rect(100%, auto);
  @include overflow(auto);
  .img {
    position: absolute;
    @include left(5rem);
    @include top(6.25rem);
    @include text-align(center);
    span {
      display: block;
      color: rgba(145, 143, 143, 1);
      font-size: 1.13rem;
      margin-top: 1rem;
      font-family: PingFangSC-regular;
    }
  }
  .step {
    position: absolute;
    top: 18.75rem;
    left: 5rem;
    width: 15rem;
    span {
      color: rgba(16, 16, 16, 1);
      font-size: 0.88rem;
      font-family: PingFangSC-regular;
      float: left;
      margin-right: 3rem;
    }
    van-stepper {
      color: rgba(16, 16, 16, 1);
      font-size: 0.88rem;
      font-family: PingFangSC-regular;
      float: right;
    }
  }
  .submit {
    position: absolute;
    left: 5rem;
    top: 23.13rem;
    width: 12.5rem;
    height: 2.5rem;
    line-height: 1.25rem;
    border-radius: 0.38rem;
    color: rgba(16, 16, 16, 1);
    font-size: 0.88rem;
    text-align: center;
    font-family: Arial;
    border: 0.06px solid rgba(187, 187, 187, 1);
  }
  .details {
    position: absolute;
    left: 2.25rem;
    top: 26.88rem;
    span {
      font-size: 0.88rem;
      color: rgba(16,16,16,1);
      font-family: PingFangSC-regular;
    }
    .p1 {
      margin-top: .5rem;
      width: 19.13rem;
      height: 8rem;
      line-height: 1.25rem;
      color: rgba(136,136,136,1);
      font-size: 0.88rem;
      font-family: Microsoft Yahei;
      border: 0.06rem solid rgba(255,255,255,0);
    }
  }
}
</style>
