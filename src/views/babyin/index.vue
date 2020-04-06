<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="宝贝信息"
        left-text="取消"
        right-text="保存"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </header>
    <div class="yuchanqi">
      <span>预产期</span>
      <input type="text" value=""/>
    </div>
    <p>与宝贝的关系</p>
    <div class="radio">
      <van-radio-group v-model="radio">
        <van-radio name="1" checked-color="#ccc">妈妈</van-radio>
        <van-radio name="2" checked-color="#ccc">爸爸</van-radio>
        <van-radio name="3" checked-color="#ccc">其他关系</van-radio>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast, RadioGroup, Radio } from 'vant'

Vue.use(NavBar)
Vue.use(Toast)
Vue.use(RadioGroup)
Vue.use(Radio)

export default {
  data () {
    return {
      fileList: [],
      radio: '1'
    }
  },
  methods: {
    onClickLeft () {
      // this.$router.go(-1) // 返回上一层
      this.$router.replace('user')
    },
    onClickRight () {
      Toast('保存成功')
      this.$router.replace('user')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.yuchanqi {
  position: absolute;
  top: 6.75rem;
  left: 3rem;
  span {
    width: 2rem;
    height: 1.38rem;
    color: rgba(141, 141, 141, 1);
    font-size: 1rem;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  input {
    width: 15rem;
    height: 2.5rem;
    margin-left: 1rem;
    border: 1px solid #ccc;
    border-radius: .38rem;
    font-size: 0.81rem;
    color: rgba(141, 141, 141, 1);
    text-indent: 0.3rem;
    text-align: left;
  }
}
p{
  @include flexbox();
  @include flex-direction(column);
  @include justify-content();
  @include align-items();
  position: absolute;
  left: 8.69rem;
  top: 12.5rem;
  width: 6rem;
  height: 1.38rem;
  color: rgba(165, 165, 165, 1);
  font-size: 1rem;
  text-align: left;
  font-family: PingFangSC-regular;
}
.radio {
  position: absolute;
  left: 6rem;
  top: 14.88rem;
  width: 15.5rem;
  height: 13rem;
  line-height: 1.25rem;
  border-radius: 0.81rem 0.81rem 0.81rem 0.81rem;
  color: rgba(16, 16, 16, 1);
  font-size: 0.88rem;
  text-align: center;
  font-family: Arial;
  .van-radio-group {
    width: 13rem;
    height: 10rem;
    color: rgba(3, 3, 3, 0.75);
    font-size: 1.19rem;
    text-align: left;
    font-family: SFUIText-regular;
    .van-radio {
      border-bottom: .05rem solid #ccc;
      margin: 1.2rem auto;
      padding-bottom: .7rem;
      .van-radio__label {
        margin-left: 2rem;
      }
    }
  }
}
</style>
