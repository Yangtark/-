<template>
  <div class="content">
    <header>
      <van-nav-bar
        title="育儿知识"
        left-arrow
        @click-left="onClickLeft"
      />
    </header>
    <ul>
      <li>
        <span>抱新生儿的姿势</span><b>2019.9.6</b>
        <p>宝宝刚出生，身体软软地，不能像抱大孩子一样，随意地抱起来就行，要保护好宝宝的颈部、腰部，尤其是宝宝的颈部，宝宝的头比较大，占身体总重量的比例比较大，千万要小心不要伤到宝宝的脖子。将宝宝从床上抱起来或者放下时，要用一只手托住宝宝的背、颈、头，一只手托住宝宝的屁股与腰。</p>
      </li>
      <li>
        <span>预防呛奶</span><b>2019.9.3</b>
        <p>新生儿的胃容量很小，加上身体发育还不是很完善，所以，很容易发生呛奶，因为发生呛奶导致新生儿窒息死亡的事件时有发生，所以，宝妈在喂奶的时候一定要多注意。首先，不要让宝宝仰卧吃奶，喂宝宝时，要斜着抱宝宝...</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)

export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1) // 返回上一层
      // this.$router.replace('user')
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
}
</style>
