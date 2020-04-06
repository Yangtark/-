<template>
    <div class="content">
       <van-field
          v-model="username"
          label="用户名"
          placeholder="请输入手机号"
          :error-message="usernamemsg"
          readonly
          clickable
          :value="value"
          @touchstart.native.stop="show = true"
        >
        <van-icon slot="button" color="green" size="24px" :name="usernameicon" />
       </van-field>
       <van-number-keyboard
          v-model="username"
          :show="show"
          :maxlength="11"
          @blur="show = false"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          clearable
          :error-message="passwordmsg"
        >
        <van-icon slot="button" color="green" size="24px" :name="passwordicon" />
        </van-field>
        <van-button type="info" @click="login" size="large" :disabled="flag" :loading="loading" loading-text="登录中...">登录</van-button>
        <van-divider content-position="right" @click="toRegister">立即注册</van-divider>
    </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button, Icon, Toast, NumberKeyboard, Divider } from 'vant'
import axios from 'axios'

Vue.use(Field)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(NumberKeyboard)
Vue.use(Divider)
export default {
  data () {
    return {
      username: '18770679401',
      password: 'yy123456',
      disabled: false,
      show: false,
      value: '',
      flag: false,
      loading: false
    }
  },
  computed: {
    usernamemsg () { // 显示错误提示信息
      if (this.username === '') {
        return ''
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return '手机号码格式错误'
      } else {
        return ''
      }
    },
    usernameicon () { // 如果满足条件则显示√，不满足则不显示
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return ''
      } else {
        return 'checked'
      }
    },
    passwordmsg () { // 显示错误提示信息
      if (this.password === '') {
        return ''
      } else if (!/^[a-zA-Z]{1}[a-zA-Z0-9]{6,16}$/.test(this.password)) {
        return '密码格式错误'
      } else {
        return ''
      }
    },
    passwordicon () { // 如果满足条件则显示√，不满足则不显示
      if (!/^[a-zA-Z]{1}[a-zA-Z0-9]{6,16}$/.test(this.password)) {
        return ''
      } else {
        return 'checked'
      }
    }
  },
  methods: {
    toRegister () {
      this.$router.replace('/register')
    },
    login () {
      if (this.usernameicon !== 'checked') {
        Toast('请输入正确的手机号码')
        return
      }
      if (this.passwordicon !== 'checked') {
        Toast('请输入正确的密码')
        return
      }
      if (this.sms !== this.code) {
        this.sms = '' // 验证码错误，重新输入验证码
        Toast('验证码输入错误')
        return
      }
      this.registerFn()
    },
    registerFn () {
      this.flag = true
      this.loading = true
      axios.post('https://www.daxunxun.com/users/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        this.flag = false
        this.loading = false
        if (res.data === 2) {
          Toast('该用户不存在，请注册')
        } else if (res.data === -1) {
          Toast('密码错误')
        } else if (res.data === 0) {
          Toast('登录失败')
        } else {
          Toast('登录成功')
          localStorage.setItem('isLogin', 'ok') // 登录成功标识
          // this.$store.commit('changeLoginState', 'ok')
          this.$router.back() // 登录成功返回上一页
        }
      })
    }
  }
}
</script>
