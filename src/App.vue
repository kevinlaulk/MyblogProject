<template>
  <div id="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div>
      <div class="header">
        <h1>Home</h1>
        <img src="./assets/logo.png" alt />
      </div>
      <hr />
      <div class="content">
        <div class="menu">
          <div class="item" style="background:#777; color:#fff">
            <router-link to="/" style="color:#fff">Django框架</router-link>
          </div>
          <div class="item">
            <router-link to="/vuecli">VueCli</router-link>
          </div>
          <div class="item">
            <a>实战博客</a>
          </div>
          <div class="item">
            <a>项目部署</a>
          </div>
        </div>
        <div class="userlist">
          <div class="userlisttitle">
            <p>Django框架</p>
            <hr />
          </div>
          <router-view />
        </div>
      </div>
      <hr />
    </div>

    <div class="foot">Copyright © 2020 Masaaki</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      menulist:[]
    }
  },
  mounted(){
    this.getMenuList()
  },
  methods: {
    //获取分类列表
    getMenuList(){
      console.log('开始获取分类')
      axios({
        url:'http://127.0.0.1:9000/get-menu-list/',
        type:'json',
        method:'get'
      }).then((res)=>{
        console.log(res)
      })
    }
  },
};
</script>

<style>
</style>
