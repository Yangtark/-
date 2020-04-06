<template>
  <div class="content">
    <div class="top-mine">
      <i class="iconfont icon-leftn" @click="onChan"></i>
      <p></p>
      <span></span>
    </div>
    <div class="mine-t">
      <div class="mine-img">
        <div class="min-i">
          <img src="" alt="">
        </div>
        <div class="img-box">
          <p>宝宝妈妈</p>
          <img src="" alt="">
        </div>
      </div>
      <div class="top-1">
        <div class="p1"><p>粉丝</p><span>500</span></div>
        <div class="p2"><p>关注</p><span>500</span></div>
        <div></div>
      <div class="gan">
        <p>关注</p>
      </div>
    </div>
  </div>
  <div class="com-mine">
      <div class="com-1-1">
        <div class="com-img">
          <van-image
            round
            width="2.5rem"
            height="2.5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="com-title">
            <p>宝宝妈妈</p>
            <span>2018.10.30</span>
          </div>
        </div>
        <div class="com-guanzhu">
          <p></p>
        </div>
      </div>
      <div class="text">
        <p>万圣节第一波照片</p>
        <span>今天穿上神秘的斗篷，带上邪恶的帽子，出发去学校</span>
      </div>
      <ul class="imgbox">
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
      </ul>
      <ul class="ping">
        <li>
          <p>评论</p>
        </li>
        <li>
          <p>分享</p>
        </li>
        <li>
          <p>点赞</p>
        </li>
      </ul>
    </div>
    <div class="kong"></div>
    <div class="com-2">
      <div class="com-2-1">
        <div class="com-2-img">
          <van-image
            round
            width="2.5rem"
            height="2.5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="com-2-title">
            <p>勾留妈妈</p>
            <span>2018.10.30</span>
          </div>
        </div>
      </div>
      <div class="text2">
        <p>万恶的淘宝节</p>
        <p>又要开始剁手了</p>
        <p>哎 哎 哎</p>
      </div>
      <div class="video">
        <img src="../../images/ceshi2.png" alt="">
      </div>
      <ul class="ping2">
        <li>
          <p>评论</p>
        </li>
        <li>
          <p>分享</p>
        </li>
        <li>
          <p>点赞</p>
        </li>
      </ul>
    </div>
    <div class="kong"></div>
    <div class="com-3">
      <div class="com-3-1">
        <div class="com-img">
          <van-image
            round
            width="2.5rem"
            height="2.5rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="com-title">
            <p>无无妈妈</p>
            <span>2018.10.30</span>
          </div>
        </div>
      </div>
      <div class="text3">
        <p>万圣节第一波照片</p>
        <span>今天穿上神秘的斗篷，带上邪恶的帽子，出发去学校</span>
      </div>
      <ul class="imgbox3">
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
        <li><img src="../../images/ceshi.png" alt=""></li>
      </ul>
      <ul class="ping3">
        <li>
          <p>评论</p>
        </li>
        <li>
          <p>分享</p>
        </li>
        <li>
          <p>点赞</p>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import { Image } from 'vant'

Vue.use(Image)
export default {
  methods: {
    onChan () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.top-mine {
  @include rect(23.44rem,2.81rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#E8E8E8);
  position: fixed;
  z-index: 2;
  i {
    @include rect(1.7rem,1.8rem);
    @include font-size(1.5rem);
    @include color(#c5c5c5);
    padding-left: 1rem;
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
.mine-t {
  @include rect(23.44rem,auto);
  @include flexbox();
  @include flex-direction(column);
  @include background-color(#E8E8E8);
  margin-top: 2.81rem;
  .mine-img {
    @include rect(23.44rem,3.88rem);
    @include background-color(#E8E8E8);
    @include flexbox();
    @include justify-content();
    @include align-items();
    margin-top: 1rem;
    .min-i {
      @include rect(3.94rem,3.88rem);
      @include background-color(#CECDCD);
    }
    .img-box {
      @include rect(8.13rem,2.13rem);
      @include flexbox();
      margin-left: 1rem;
      @include align-items();
      p {
        @include font-size(0.88rem);
      }
    }
  }
  .top-1 {
    @include rect(23.44rem,3.2rem);
    @include flexbox();
    @include background-color(#e8e8e8);
    @include justify-content(space-between);
    padding: 0.8rem 2rem;
    .p1 {
      @include rect(5rem,1.69rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      p {
        @include font-size(0.88rem);
        @include color(#939393);
      }
      span {
        @include font-size(0.88rem);
        @include color(#939393);
        padding-left: 0.5rem;
      }
    }
    .p2 {
      @include rect(5rem,1.69rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      p {
        @include font-size(0.88rem);
        @include color(#939393);
      }
      span {
        @include font-size(0.88rem);
        @include color(#939393);
        padding-left: 0.5rem;
      }
    }
    .gan {
      @include rect(4.44rem,1.88rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      @include background-color(#fff);
      p {
        @include font-size(0.88rem);
        @include color(#101010);
      }
    }
  }
}
.com-mine {
  @include rect(23.44rem,30.88rem);
  @include flexbox();
  @include flex-direction(column);
  @include background-color(#fff);
  border-bottom: 2px solid #e9e9e9;
  margin-top: .62rem;
  .com-1-1 {
    @include rect(19.5rem,6rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    margin: 0 auto;
    border-bottom: 1px solid #EAE9E9;
    .com-img {
      @include flexbox();
      @include flex();
      @include align-items();
      .com-title {
        margin-left: 0.8rem;
        p {
          @include color(#101010);
          @include font-size(0.88rem);
        }
        span {
          @include color(#939393);
          @include font-size(0.75rem);
        }
      }
    }
    .com-guanzhu {
      @include rect(4.44rem,1.88rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      margin-right: 1rem;
      @include font-size(0.88rem);
      @include color(#939393);
    }
  }
  .text {
    @include flexbox();
    @include rect(19.5rem,5.5rem);
    @include flex-direction(column);
    @include font-size(0.88rem);
    line-height: 1.25rem;
    // margin-top: 0.5rem;
    margin: 0.4rem auto;
  }
  .imgbox {
    @include rect(19.5rem,17rem);
    @include flexbox();
    // @include flex();
    margin: 0 auto;
    flex-wrap: wrap;
    li {
      @include rect(6.06rem,5rem);
      @include background-color(#f00);
      margin-right: 0.44rem;
      img {
        @include rect(6.06rem,5rem);
      }
    }
  }
  .ping {
    @include rect(19.5rem,2.31rem);
    @include flexbox();
    // @include justify-content(space-between);
    @include justify-content();
    border-top: 1px  solid #EAE9E9;
    // margin-top: 2rem;
    margin: 0 auto;
    li {
      @include rect(2.94rem,2.31rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      p {
        @include color(#939393);
        @include font-size(0.81rem);
      }
    }
  }
}
.com-2 {
  @include rect(23.44rem,22.88rem);
  @include flexbox();
  @include flex-direction(column);
  @include background-color(#fff);
  border-bottom: 2px solid #e9e9e9;
  margin-top: 0.5rem;
  .com-2-1 {
    @include rect(19.5rem,5.5rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    margin: 0 auto;
    border-bottom: 1px solid #EAE9E9;
    .com-2-img {
      @include flexbox();
      @include flex();
      @include align-items();
      .com-2-title {
        margin-left: 0.8rem;
        p {
          @include color(#101010);
          @include font-size(0.88rem);
        }
        span {
          @include color(#939393);
          @include font-size(0.75rem);
        }
      }
    }
  }
  .text2 {
    @include flexbox();
    @include rect(19.5rem,5.5rem);
    @include flex-direction(column);
    @include font-size(0.88rem);
    line-height: 1.25rem;
    margin: 0.4rem auto;
  }
  .video {
    @include rect(12.5rem,7.75rem);
    @include background-color(#F0ECEC);
    @include font-size(0.88rem);
    margin-left: 2rem;
    line-height: 7.75rem;
    text-align: center;
    img {
      @include rect(12.5rem,7.5rem);
    }
  }
  .ping2 {
    @include rect(19.5rem,2.31rem);
    @include flexbox();
    @include justify-content();
    border-top: 1px  solid #EAE9E9;
    margin-top: 1rem;
    margin-left: 2rem;
    li {
      @include rect(2.94rem,2.31rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      p {
        @include color(#939393);
        @include font-size(0.81rem);
      }
    }
  }
}
.com-3 {
  @include rect(23.44rem,30.88rem);
  @include flexbox();
  @include flex-direction(column);
  @include background-color(#fff);
  border-bottom: 2px solid #e9e9e9;
  margin-top: 0.5rem;
  .com-3-1 {
    @include rect(19.5rem,6rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    margin: 0 auto;
    border-bottom: 1px solid #EAE9E9;
    .com-img {
      @include flexbox();
      @include flex();
      @include align-items();
      .com-title {
        margin-left: 0.8rem;
        p {
          @include color(#101010);
          @include font-size(0.88rem);
        }
        span {
          @include color(#939393);
          @include font-size(0.75rem);
        }
      }
    }
  }
  .text3 {
    @include flexbox();
    @include rect(19.5rem,5.5rem);
    @include flex-direction(column);
    @include font-size(0.88rem);
    line-height: 1.25rem;
    margin: 0.4rem auto;
  }
  .imgbox3 {
    @include rect(19.5rem,17rem);
    @include flexbox();
    margin: 0 auto;
    flex-wrap: wrap;
    li {
      @include rect(6.06rem,5rem);
      @include background-color(#f00);
      margin-right: 0.44rem;
      img {
        @include rect(6.06rem,5rem);
      }
    }
  }
  .ping3 {
    @include rect(19.5rem,2.31rem);
    @include flexbox();
    @include justify-content();
    border-top: 1px  solid #EAE9E9;
    margin: 0 auto;
    li {
      @include rect(2.94rem,2.31rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      p {
        @include color(#939393);
        @include font-size(0.81rem);
      }
    }
  }
}
.kong {
  @include rect(23.44rem,0.5rem);
  @include background-color(#ccc);
}
</style>
