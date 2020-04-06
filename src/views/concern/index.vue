<template>
  <div class="content">
    <div class="kong1"></div>
    <div class="com-1">
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
          <p>关注</p>
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
        <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=i0031p1bg8z" allowFullScreen="true"></iframe>
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
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

.container {
  overflow: auto;
}
.kong1 {
  margin-top: 2.81rem;
  // background-color: #ccc;
}
.com-1 {
  @include rect(23.44rem,30.88rem);
  @include flexbox();
  @include flex-direction(column);
  @include background-color(#fff);
  border-bottom: 2px solid #e9e9e9;
  margin-top: 2.62rem;
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
      border: 1px solid #bbb;
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
    @include rect(14.94rem,7.75rem);
    @include background-color(#F0ECEC);
    @include font-size(0.88rem);
    margin-left: 2rem;
    line-height: 7.75rem;
    text-align: center;
  }
  .ping2 {
    @include rect(19.5rem,2.31rem);
    @include flexbox();
    // @include justify-content(space-between);
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
      // @include justify-content(space-between);
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
  .ping3 {
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
.kong {
  @include rect(23.44rem,0.5rem);
  @include background-color(#ccc);
}
</style>
