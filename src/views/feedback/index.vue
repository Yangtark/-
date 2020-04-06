<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="意见反馈"
        right-text="发送"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickright"
      />
    </header>
    <textarea class="yijian">意见和建议：</textarea>
    <div class="Img">上传图片(可上传3张)
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="3"
      />
    </div>
    <div class="txt">
      <span>联系方式 :</span>
      <van-field
        readonly
        clickable
        :value="value"
        @touchstart.native.stop="show = true"
      />
      <van-number-keyboard
        v-model="value"
        :show="show"
        :maxlength="11"
        @blur="show = false"
      />
    </div>
    <div class="shuoming">
      我们会认真阅读您的意见，并尽早恢复。咨询更多问题，可拨打客服电话:410-888-6666。感谢您的支持!
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Uploader, Toast, NumberKeyboard, Field } from 'vant'

Vue.use(NavBar)
Vue.use(Uploader)
Vue.use(Toast)
Vue.use(NumberKeyboard)
Vue.use(Field)

export default {
  data () {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/cat.jpeg' }
      ],
      show: false,
      value: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1) // 返回上一层
      // this.$router.replace('user')
    },
    onClickright () {
      Toast('发送成功')
      this.$router.go(-1) // 返回上一层
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.Img {
  @include flexbox();
  @include rect(100%,8.75rem);
  @include flex-direction(column);
  @include justify-content();
  @include align-items();
  @include color(rgba(16, 16, 16, 1));
  @include font-size(0.88rem);
  @include border(0.06px solid rgba(223, 223, 223, 1));
  position: absolute;
  top: 13.5rem;
}
.yijian {
  @include flexbox();
  @include rect(100%,8.38rem);
  @include flex-direction(column);
  @include justify-content();
  @include align-items();
  @include line-height(1.25rem);
  @include color(rgba(136, 136, 136, 1));
  @include font-size(0.88rem);
  @include text-align(left);
  @include border(0.06rem solid rgba(187, 187, 187, 1));
}
.txt {
  @include flexbox();
  @include rect(100%,2.88rem);
  @include color(rgba(16, 16, 16, 1));
  @include font-size(0.88rem);
  @include border(0.06px solid rgba(223, 223, 223, 1));
  position: absolute;
  top: 23rem;
  span {
    @include rect(6rem,2.88rem);
    @include line-height(2.88rem)
  }
  .van-cell {
    padding: 10px 0;
  }
}
.shuoming {
  position: absolute;
  bottom: 0;
}
</style>
