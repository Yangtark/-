<template>
  <div class="content">
    <div class="top-listen">
      <router-link class="iconfont icon-leftn" to="/living" tag="i"></router-link>
      <p>听听</p>
      <span></span>
    </div>
    <div class="put">
      <input type="text" placeholder="请输入...">
      <div class="sousuo">
        <p>搜索</p>
      </div>
    </div>
    <ul class="listen-list">
      <li><p>歌曲</p></li>
      <li><p>故事</p></li>
    </ul>
    <ul class="listen-item">
      <li>
        <div class="rabit">
          <img src="" alt="">
        </div>
        <p>小白兔</p>
      </li>
      <li>
        <div class="rabit">
          <img src="" alt="">
        </div>
        <p>小白兔</p>
      </li>
      <li>
        <div class="rabit">
          <img src="" alt="">
        </div>
        <p>小白兔</p>
      </li>
      <li>
        <div class="rabit">
          <img src="" alt="">
        </div>
        <p>小白兔</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top-listen {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F8F8F8);
  position: fixed;
  z-index: 1;
  i {
    @include rect(1.7rem,1.8rem);
    @include font-size(1.5rem);
    @include color(#c5c5c5);
    padding-left: 1rem;
    font-weight: 600;
  }
  p {
    @include font-size(1.13rem);
    padding-left: 2.1rem;
  }
  span {
    @include rect(3.31rem,1.56rem);
    text-align: center;
    line-height: 1.56rem;
    @include font-size(0.88rem);
    @include color(#c5c5c5);
    padding-right: 1rem;
  }
}
.put {
  @include rect(20.75rem,2.5rem);
  // margin-top: 3.3rem;
  margin: 3.3rem auto 0 auto;
  position: relative;
  input {
    @include rect(20.75rem,2.5rem);
    border-radius: 5px;
    border: 1px solid #ccc;
    @include font-size(0.88rem);
    text-indent: 0.7rem;
    @include color(#888);
  }
  .sousuo {
    @include rect(3.13rem,2.3rem);
    // border: 1px solid #ccc;
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include background-color(#fff);
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    p {
      @include font-size(0.88rem);
      @include color(#101010);
    }
  }
}
.listen-list {
  @include rect(23.44rem,3.5rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  border-bottom: 1px solid #ccc;
  li {
    @include rect(5.06rem,1.88rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include background-color(#b5b5b5);
    margin: 0.5rem 3rem;
    p {
      @include font-size(0.88rem);
    }
  }
}
.listen-item {
  @include rect(23.44rem,auto);
  @include flexbox();
  flex-wrap: wrap;
  li {
    @include rect(9.38rem,13rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include flex-direction(column);
    margin: 0 auto;
    .rabit {
      @include rect(9.38rem,8.75rem);
      @include background-color(#dfdbdb);
    }
    p {
      @include font-size(1rem);
      @include color(#101010);
      margin-top: 1.5rem;
    }
  }
}
</style>
