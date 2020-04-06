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
         <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <van-button @click="sendCode" slot="button" :disabled="disabled" size="small" type="primary">{{ btnmsg }}</van-button>
        </van-field>
        <van-button type="info" @click="register" size="large" :disabled="flag" :loading="loading" loading-text="注册中...">注册</van-button>
        <van-divider content-position="right" @click="toLogin">立即登录</van-divider>
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
      password: '',
      sms: '',
      btnmsg: '发送验证码',
      disabled: false,
      code: '', // 存储短信发来的验证码
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
    sendCode () {
      let time = 10
      let timer
      timer = setInterval(() => {
        time--
        if (time === 0) {
          clearInterval(timer)
          this.disabled = false // 按钮可点
          this.btnmsg = '发送验证码'
          return
        }
        if (this.usernameicon !== 'checked') {
          clearInterval(timer)
          // this.btnmsg = '发送验证码'
          return
        }
        if (this.passwordicon !== 'checked') {
          clearInterval(timer)
          // this.btnmsg = '发送验证码'
          return
        }
        this.disabled = true // 按钮不可点
        this.btnmsg = time + 's后重新发送'
      }, 1000)
      this.getCode()
    },
    getCode () {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        Toast('请填写正确的手机号')
      } else if (!/^[a-zA-Z]{1}[a-zA-Z0-9]{6,16}$/.test(this.password)) {
        Toast('请填写密码')
      } else {
        axios.get(`https:www.daxunxun.com/users/sendCode?tel=${this.username}`).then(res => {
          console.log(res.data)
          if (res.data === 1) {
            Toast('该手机号已经被注册，请直接登录')
          } else if (res.data === 0) {
            Toast('获取验证码失败')
          } else {
            console.log(res.data)
            // 当点击注册时，需要校验输入的值是不是正确的
            this.code = res.data.code
          }
        })
      }
    },
    toLogin () {
      this.$router.replace('/login')
    },
    register () {
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
      axios.post('https://www.daxunxun.com/users/register', {
        username: this.username,
        password: this.password
      }).then(res => {
        this.flag = false
        this.loading = false
        if (res.data === 0) {
          Toast('注册失败')
        } else if (res.data === 2) {
          Toast('该用户已注册')
        } else {
          Toast('注册成功')
          // this.$store.commit('changeLoginState', 'ok')
        }
      })
    }
  }
}
</script>
