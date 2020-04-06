<template>
  <footer class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <p>首页</p>
      </router-link>
      <router-link to="/course" tag="li">
        <p>课程</p>
      </router-link>
      <router-link to="/note" tag="li">
        <p>宝宝记</p>
      </router-link>
      <router-link to="/community" tag="li">
        <p>社区</p>
      </router-link>
      <router-link to="/user" tag="li">
        <p>我的</p>
      </router-link>
      <slot></slot>
    </ul>
  </footer>
</template>
