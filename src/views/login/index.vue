<template>
 <div class="login-container"  style="background-image: url(/img/bg.jpg);background-size: 100% 100%;">
    <div class="login-weaper">
      <div class="login-left">
        <p class="login-time">
          {{time}}
        </p>
        <img class="img"
             src="/img/logo.png"
             alt="">
        <p class="title">AnTi 企业级开发平台</p>
      </div>
      <div class="login-border">
        <div class="login-top"></div>
        <div class="login-main">
          <h4 class="login-title">
            登录 AnTi
          </h4>
          <userloginform v-if="activeName==='user'"></userloginform>
          <div class="login-menu">
            <a href="#"   
               @click.stop="activeName='user'">账号密码</a>
            <a href="#"
               @click.stop="activeName='code'">手机号登录</a>
            <a href="#"
               @click.stop="activeName='third'">第三方登录</a>
          </div>
        </div>

      </div>
    </div>
    <!-- <el-form ref="loginForm" :model="loginForm"  class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">邻家小铺</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="账号"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          placeholder="密码"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>

      <div style="position:relative">
        <div class="tips">
          <span>账号: admin</span>
          <span>密码 : admin</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">账号 : developer</span>
          <span>密码 : developer</span>
        </div>
      </div>
    </el-form> -->
  </div>
</template>

<script>
import { dateFormat } from "@/utils/date";
import userloginform from "./userLoginForm"
export default {
  name: 'login',
  components: {
    userloginform
  },
  data() {
    return {
      //  loginForm: {
      //   username: '',
      //   password: ''
      // },
      loading: false,
      pwdType: 'password',
      activeName:'user',
      time: "2020-03-28 19:41"
    };
  },
  computed:{
  },
  watch:{
  },
  created() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  mounted() {},
  props: [],
  methods: {

    getTime:function() {
      this.time = dateFormat(new Date());
    }
  },
};
</script>

<style scoped lang="scss">
$bg:#283443;
$light_gray:#eee;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input{
    color: $cursor;
    &::first-line {
      color: $light_gray;
    }
  }
}
*{
  padding: 0px;
  margin: 0px;
}
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  .login-weaper{
    margin: 0 auto;
    width: 1000px;
    height: 600px;
    box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
    .login-left{
        height: 100%;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        background-color: #409eff;
        color: #fff;
        float: left;
        width: 50%;
        position: relative;
        align-items: center;
        .login-time {
            position: absolute;
            left: 30px;
            top: 35px;
            color: #fff;
            font-weight: 200;
            opacity: 0.9;
            font-size: 18px;
            overflow: hidden;
        }
        .img{
          margin-top: 160px;
          width: 140px;
        }
        .title{
           margin-top: 60px;
           text-align: center;
           color: #fff;
           font-weight: 300;
           letter-spacing: 2px;
           font-size: 25px;
        }
    }
    .login-border {
      border-left: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      color: #fff;
      background-color: #fff;
      height: 100%;
      width: 50%;
      float: left;
      box-sizing: border-box;
      .login-top{
        width: 65%;
        height: 5%;
      }
      .login-main {
        margin: 0 auto;
        width: 65%;
        height: 90%;
        box-sizing: border-box;
        padding-top: 40px;
      }
      .login-main > h3 {
        margin-bottom: 20px;
      }
      .login-main > p {
        color: #76838f;
      }
      .login-title {
        color: #333;
        margin-bottom: 40px;
        font-weight: 500;
        font-size: 22px;
        text-align: center;
        letter-spacing: 4px;
      }
    }
  }
}
.login-menu {
  margin-top: 40px;
  width: 100%;
  text-align: center;
    a {
      color: #999;
      font-size: 12px;
      margin: 0px 8px;
      text-decoration:none;
    }
}
</style>
