<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="修改密码"
        left-text=""
        right-text="保存"
        left-arrow
        :value="value"
        @click-left="onClickLeft"
        @click-right="onClickright"
      />
    </header>
    <van-cell-group>
      <van-field
        clickable
        v-model="oldpassword"
        @blur="show = false"
        :show="show"
        label="旧密码"
        type="password"
        placeholder="请输入旧密码"
        rows="1"
        autosize
      />
      <van-field
        clickable
        :valueb="value"
        @touchstart.native.stop="show = true"
        label="新密码"
        type="password"
        placeholder="请输入新密码(至少6位)"
        rows="1"
        autosize
      />
      <van-field
         clickable
        :valuec="value"
        @touchstart.native.stop="show = true"
        label="确认密码"
        type="password"
        placeholder="请再次确认密码"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-number-keyboard
      v-model="value"
      :show="show"
      :maxlength="6"
      @blur="show = false"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast, Cell, CellGroup, Field, NumberKeyboard } from 'vant'

Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Cell).use(CellGroup)
Vue.use(Field)
Vue.use(NumberKeyboard)

export default {
  data () {
    return {
      show: false,
      value: '',
      oldpassword: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1) // 返回上一层
      // this.$router.replace('user')
    },
    onClickright () {
      Toast('保存成功')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
</style>
