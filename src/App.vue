<template>
  <div id="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div>
      <button v-if="loginType == false" @click="showLoginRegisterBox(1)">登录</button>
      <button v-if="loginType == false" @click="showLoginRegisterBox(2)">注册</button>
      <button @click="toHomepage()" v-if="loginType == true">首页</button>
      <button @click="toUserinfo()" v-if="loginType == true">用户中心</button>
      <button v-if="loginType == true" @click="showLoginRegisterBox(3)">修改</button>
      <div class="header">
        <h1>{{siteinfo.sitename}}</h1>
        <img :src="siteinfo.logo" alt />
      </div>
      <Test></Test>
      <hr />
      <div class="content">
        <div class="menu">
          <div v-for="item in menulist" :key="item.id" class="item">
            <div v-if="item.id == choosed" style="background:#777; color:#fff">
              <a style="color:#fff">{{ item.text }}</a>
            </div>
            <div v-else @click="chooseMenu(item.id)">
              <a style="color:#000">{{ item.text }}</a>
            </div>
          </div>
        </div>
        <div class="userlist">
          <div class="userlisttitle">
            <p>{{ choosed_text }}</p>
            <hr />
          </div>
          <router-view @hideBox="hideLoginRegisterBox" @changeUI="changeLoginType"/>
        </div>
      </div>
      <hr />
    </div>
    <LoginBox v-if="boxtarget" v-bind:target="boxtarget" @hideBox="hideLoginRegisterBox"></LoginBox>
    <div class="foot">Copyright © 2020 Masaaki</div>
  </div>
</template>

<script>
import axios from "axios";
import LoginBox from "../src/components/LoginBox";
import Test from "../src/components/test";
export default {
  components: {
    LoginBox,
    Test,
  },
  data() {
    return {
      choosed: 1,
      choosed_text: "Django后端",
      menulist: [],
      boxtarget: 0,
      siteinfo: {},
      loginType: false,
    };
  },

  mounted() {
    this.getMenuList();
    try {
      if (window.localStorage.getItem("token").length > 0) {
        this.loginType = true;
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    toHomepage(){
      this.$router.push({path:'/'})
    },
    toUserinfo(){
      this.$router.push({path:'/Userinfo'})
    },
    //获取分类列表
    getMenuList() {
      console.log("开始获取分类");
      axios({
        url: "http://127.0.0.1:9000/get-menu-list/",
        type: "json",
        method: "get",
      }).then((res) => {
        console.log(res);
        this.menulist = res.data.menu_data;
        this.siteinfo = res.data.siteinfo;
      });
    },
    chooseMenu(id) {
      console.log(id);
      this.choosed = id;
      for (let i = 0; i < this.menulist.length; i++) {
        if (id == this.menulist[i].id) {
          this.choosed_text = this.menulist[i].text;
        }
      }
      // 进行id传参跳转
      this.$router.push({ path: "/", query: { menuId: id } });
    },
    // 展示登陆注册框体LoginBox
    showLoginRegisterBox(value) {
      this.boxtarget = value;
    },
    // 隐藏父组件
    hideLoginRegisterBox() {
      this.boxtarget = 0;
    },
    // 修改登录状态
    changeLoginType(bool){
      this.loginType = bool
    }
  },
};
</script>

<style>
</style>
