<template>
    <div class="content">
      <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import { Image } from 'vant'

Vue.use(Image)
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (localStorage.getItem('isLogin') === 'ok') { // 如果登录成功
        next('/user/login') // 则回到登录成功之后的页面
      } else {
        next('/user/nologin') // 如果没有登录，则回到没有登录的页面
      }
    })
  }
}
</script>
