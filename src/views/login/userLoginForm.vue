<template>
  <el-form class="login-form"
           status-icon
           :rules="loginRules"
           ref="loginForm"
           :model="loginForm"
           label-width="0">
    <el-form-item prop="username">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                v-model="loginForm.username"
                auto-complete="off"
                placeholder="用户名">
            <svg-icon slot="prefix" icon-class="user" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small"
                @keyup.enter.native="handleLogin"
                :type="passwordType"
                v-model="loginForm.password"
                auto-complete="off"
                placeholder="密码">
        <i class="el-icon-view el-input__icon"
           slot="suffix"
           @click="showPassword"></i>
         <svg-icon slot="prefix" icon-class="password" />
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" 
                 size="small"
                 @click.native.prevent="handleLogin"
                 class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "userloginform",
    data() {
      return {
        loginForm: {
          username: "admin",
          password: "admin",
          type: "account"
        },
        loginRules: {
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" }
          ],
          password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 1, message: "密码长度最少为6位", trigger: "blur" }
          ]
        },
        passwordType: "password",
        loading:false,
        redirect:'/'
      };
    },
    created() {},
    mounted() {
      this.init();
    },
    computed: {
     
    },
    props: [],
    methods: {
      init(){
        let redirect = this.$route.query.redirect
        if(redirect){
          this.redirect = redirect
          console.log(redirect+"-----");
        }
      },
      showPassword() {
        this.passwordType == ""
          ? (this.passwordType = "password")
          : (this.passwordType = "");
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: '登录中,请稍后。。。',
              spinner: "el-icon-loading"
            });
            this.$store.dispatch("user/login", this.loginForm).then(() => {
              loading.close();
              if(redirect){
                this.$router.push(redirect)
              }else {
                this.$router.push({ path: this.redirect })
              }
            }).catch(() => {
              loading.close()
            });
          }
        });
      }
    }
  };
</script>

<style scoped lang="scss">
.login-submit {
  width: 100%;
  height: 45px;
  border: 1px solid #409EFF;
  background: none;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 300;
  color: #409EFF;
  cursor: pointer;
  margin-top: 30px;
  font-family: "neo";
  transition: 0.25s;
}
.login-form {
  margin: 10px 0;
  i {
    color: #333;
  }
  .el-form-item__content {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 12px;
    
  }
  .el-input {
    input {
      padding-bottom: 10px;
      text-indent: 5px;
      background: transparent;
      border: none;
      border-radius: 0;
      color: #333;
      border-bottom: 1px solid rgb(235, 237, 242);
    }
    .el-input__prefix {
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
  }
}
</style>
