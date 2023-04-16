<template>
  <div class="login">
    <div class="input-container">
      <input class="input" name="text" type="text" v-model="password" @keyup.enter="login">
      <label class="label" for="input">输 入 密 码</label>
      <div class="topline"></div>
      <div class="underline"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'
import { ElMessage } from 'element-plus'
export default {
  data () {
    return {
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://1.117.218.200:3000/user/login', {
        password: md5(this.password)
      }).then((res) => {
        if (res.data.code === '1') {
          this.$store.commit("changeLogin")
          this.password = ''
          ElMessage({
            message: '登录成功',
            type: 'success',
          })

          this.$router.push({
            name: 'home'
          })
        } else {
          ElMessage.error('密码错误喔！')
        }
      })

    }
  },
  mounted () {
    ElMessage({
      message: '请先登录',
      type: 'warning',
      duration: 800
    })
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: calc(100vh - 135px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-container {
  position: relative;
}

.input {
  padding: 10px;
  height: 40px;
  border: 2px solid var(--color2);
  border-top: none;
  border-bottom: none;
  font-size: 16px;
  background: transparent;
  outline: none;
  box-shadow: 7px 7px 0px 0px var(--color2);
  transition: all 0.5s;
}

.input:focus {
  box-shadow: none;
  transition: all 0.5s;
}

.label {
  position: absolute;
  top: 10px;
  left: 10px;
  color: var(--color2);
  transition: all 0.5s;
  transform: scale(0);
}

.input-container .topline {
  position: absolute;
  content: '';
  background-color: var(--color2);
  width: 0%;
  height: 2px;
  right: 0;
  top: 0;
  transition: all 0.5s;
}

.input-container input[type='text']:focus ~ .topline {
  width: 35%;
  transition: all 0.5s;
}

.input-container .underline {
  position: absolute;
  content: '';
  background-color: var(--color2);
  width: 0%;
  height: 2px;
  right: 0;
  bottom: 0;
  transition: all 0.5s;
}

.input-container input[type='text']:focus ~ .underline {
  width: 100%;
  transition: all 0.5s;
}

.input-container input[type='text']:focus ~ .label {
  top: -10px;
  transform: scale(1);
  transition: all 0.5s;
}
</style>