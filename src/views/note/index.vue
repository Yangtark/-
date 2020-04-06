<template>
  <div class="content">
    <div class="note-1">
      <div class="note-text1">
        <p>92cm</p>
        <span>身高</span>
      </div>
      <div class="note-img"></div>
      <div class="note-text2">
        <p>20kg</p>
        <span>体重</span>
      </div>
      <div class="note-text3">
        <p>小宝宝</p>
        <span>1岁</span>
      </div>
      <div class="change">
        <router-link to="/ziliao" tag="span">切换</router-link>
      </div>
    </div>
    <ul class="babylist">
      <router-link to="/firsttime" tag="li">第一次</router-link>
      <router-link to="/growth" tag="li">成长记录</router-link>
      <router-link to="/photos" tag="li">相册</router-link>
      <router-link to="/friends" tag="li">亲友团</router-link>
    </ul>
    <div class="tox">
      <p>今天</p>
      <span>第一天</span>
    </div>
    <div class="cont-1">
      <p>今天宝宝出生了，长得很漂亮，虽然没有睁眼，但是肯定很大。</p>
    </div>
    <div class="cont-2">
      <p>身高80cm  体重5kg</p>
    </div>
    <div class="cont-3">
      <div class="cont-3-1">
        <p>宝宝长得真漂亮宝宝长得真漂亮宝宝长得真漂亮</p>
      </div>
      <div class="cont-3-2">
        <img src="../../images/ceshi2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.note-1 {
  @include rect(23.44rem,13rem);
  @include background-color(#E8E8E8);
  position: fixed;
  .note-img {
    @include rect(4.31rem,4.31rem);
    border-radius: 50%;
    @include background-color(#fff);
    position: absolute;
    left: 9.56rem;
    top: 4.19rem;
  }
  .note-text1 {
    @include rect(9.56rem,3.13rem);
    position: absolute;
    top: 6rem;
    left: 0;
    text-align: center;
    p {
      @include font-size(0.88rem);
    }
    span {
      @include font-size(0.81rem);
    }
  }
  .note-text2 {
    @include rect(9.56rem,3.13rem);
    position: absolute;
    top: 6rem;
    left: 13.88rem;
    text-align: center;
    p {
      @include font-size(0.88rem);
    }
    span {
      @include font-size(0.81rem);
    }
  }
  .note-text3 {
    @include rect(6.69rem,3.13rem);
    position: absolute;
    top: 9.56rem;
    left: 8.38rem;
    text-align: center;
    p {
      @include font-size(1rem);
    }
    span {
      @include font-size(0.81rem);
    }
  }
  .change {
    @include rect(3.56rem,1.88rem);
    position: absolute;
    left: 19.25rem;
    top: 1.88rem;
    span {
      @include font-size(0.81rem);
      @include color(#9f9f9f);
    }
  }
}
.babylist {
  @include rect(23.44rem,2.5rem);
  @include flexbox();
  padding: 0 2rem;
  @include justify-content(space-between);
  margin-top: 14rem;
  li {
    @include rect(3.75rem,2.5rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include background-color(#f4f2f2);
    @include font-size(0.81rem);
  }
}
.tox {
  @include rect(23.44rem,2.25rem);
  padding: 0 2rem;
  margin-top: 1rem;
  @include flexbox();
  p {
    @include font-size(1rem);
    @include color(#535353);
  }
  span {
    @include font-size(0.8rem);
    margin-left: 1rem;
    line-height: 1.8rem;
  }
}
.cont-1 {
  @include rect(18.5rem,3.5rem);
  margin-left: 2rem;
  @include background-color(#F2F1F1);
  p {
    @include font-size(0.88rem);
    padding: 0.5rem 1rem 0 1rem;
  }
}
.cont-2 {
  @include rect(18.5rem,2.81rem);
  margin-left: 2rem;
  margin-top: 0.7rem;
  line-height: 2.81rem;
  @include background-color(#F2F1F1);
  p {
    @include font-size(0.88rem);
    padding: 0 1rem 0 1rem;
  }
}
.cont-3 {
  @include rect(18.5rem,13rem);
  @include background-color(#F2F1F1);
  margin: 0.7rem 0 1rem 2rem;
  padding: 1rem;
  .cont-3-1 {
    @include rect(16rem,2.31rem);
    p {
      @include font-size(0.88rem);
    }
  }
  .cont-3-2 {
    @include rect(12.5rem,7.5rem);
    margin-top: 1rem;
    img {
      @include rect(12.5rem,7.5rem);
    }
  }
}
</style>
