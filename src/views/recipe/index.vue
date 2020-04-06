<template>
  <div class="content">
    <div class="top-recipe">
      <router-link class="iconfont icon-leftn" to="/living" tag="i"></router-link>
      <p>食谱</p>
      <span></span>
    </div>
    <div class="put">
      <input type="text" placeholder="请输入...">
      <div class="sousuo">
        <p>搜索</p>
      </div>
    </div>
    <ul class="life-list">
      <li class="life-item">
        <div class="recipe-sp">
          <span>孕期</span>
        </div>
        <p>每日食谱</p>
          <ul class="life-ul">
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
          </ul>
          <div class="empty"></div>
      </li>
      <li class="life-item">
        <div class="recipe-sp">
          <span>产后</span>
        </div>
        <p>每日食谱</p>
          <ul class="life-ul">
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
          </ul>
          <div class="empty"></div>
      </li>
      <li class="life-item">
        <div class="recipe-sp">
          <span>婴儿</span>
        </div>
        <p>每日食谱</p>
          <ul class="life-ul">
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
          </ul>
          <div class="empty"></div>
      </li>
      <li class="life-item">
        <div class="recipe-sp">
          <span>幼儿</span>
        </div>
        <p>每日食谱</p>
          <ul class="life-ul">
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
            <li class="life-li">
              <div class="life-img"><img src="" alt=""></div>
              <span>虾仁玉米羹</span>
            </li>
          </ul>
          <div class="empty"></div>
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

.top-recipe {
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
.life-list {
  @include rect(23.44rem,auto);
  .recipe-sp {
    @include rect(22.5rem,2rem);
    margin: 1rem 0 0 1rem;
    span {
      @include rect(2.2rem,1.56rem);
      @include font-size(1.13rem);
    }
  }
  .life-item {
    @include rect(23.44rem,auto);
    .empty {
      @include rect(23.44rem,1.25rem);
      @include background-color(#E5E5E5);
    }
    p {
      @include rect(4rem,1.38rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      margin: 1rem 1rem;
      @include font-size(1rem);
      @include color(#101010);
    }
    .life-ul {
      @include rect(22.5rem,8rem);
      @include flexbox();
      margin: 1rem 1rem;
      .life-li {
        @include rect(6.25rem,8rem);
        @include flexbox();
        @include flex();
        @include flex-direction(column);
        .life-img {
          @include rect(6.25rem,5rem);
          @include background-color(#E5E5E5);
        }
        span {
          @include rect(4.4rem,1.25rem);
          @include font-size(0.88rem);
          @include color(#101010);
          margin-top: 0.8rem;
        }
      }
    }
  }
}
</style>
