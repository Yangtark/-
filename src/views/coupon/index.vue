<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="我的优惠券"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList=true"
    />
    <!-- 优惠券列表 -->
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
</div>
</template>
<script>
import Vue from 'vue'
import { NavBar, CouponCell, CouponList, Toast } from 'vant'

Vue.use(NavBar)
Vue.use(CouponCell).use(CouponList)
Vue.use(Toast)
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '宝宝课程',
  startAt: 1567267200,
  endAt: 1570464000,
  valueDesc: '10',
  unitDesc: '元'
}
export default {
  data () {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1) // 返回上一层
      // this.$router.replace('home') // this.$router.replace('home')
    },
    showList () {
      this.showList = true
    },
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
      Toast.success('兑换成功')
    },
    onExchange (code) {
      this.coupons.push(coupon)
    }
  }
}
</script>
