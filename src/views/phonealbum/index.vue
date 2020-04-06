<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="定制相册"
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
    <div class="details">
      <span>详情</span>
      <p class="p1">高级压纹相册根据大小不同，一般可内置150张3R照片，更可灵活粘贴4R、5R、6R、7R、8R等12寸以下的其他各种尺寸照片，纪念册附有拍摄花絮说明卡，方便记录照片内容。高级压纹相册相比于传统相册存放照片量多，可以保存长久。
      </p>
      <p class="p2">一款受家长喜爱的相册，社区评论可见证哦！</p>
    </div>
    <button type="btn" class="btn" @click="oncustom">立即定制</button>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Image } from 'vant'

Vue.use(NavBar)
Vue.use(Image)

export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1) // 返回上一层
      // this.$router.replace('user')
    },
    oncustom () {
      // this.$router.replace('photopurchase')
      this.$router.push('photopurchase')
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
  .details {
    position: absolute;
    left: 2.25rem;
    top: 17.5rem;
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
      text-align: left;
      font-family: Microsoft Yahei;
      border: 0.06rem solid rgba(255,255,255,0);
    }
    .p2 {
      margin-top: .05rem;
      width: 16.88rem;
      height: 2.5rem;
      color: rgba(135, 136, 136, 1);
      font-size: 0.88rem;
      text-align: left;
      font-family: PingFangSC-regular;
    }
  }
  .btn {
    position: absolute;
    left: 5.44rem;
    top: 36.25rem;
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
}
</style>
