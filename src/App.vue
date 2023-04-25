<template>
  <div class="home-load" v-if="load">
    <div class="loader">
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item3"></div>
    </div>
  </div>
  <div v-else>
    <nav :class="isfade ? 'fade' : ''">
      <div class="w">
        <div class="icon-m" @click="open = !open"><span class="iconfont icon-daohang"></span></div>
        <div class="login" :style="{ 'backgroundImage': `url(${!bgc ? 'day_logo.png' : 'dark-logo.png'})` }"
          @click="this.$router.push({ name: 'home' })"></div>
        <div class="nav">
          <ul>
            <li><router-link to="home" active-class="nav-active"><span
                  class="iconfont icon-shouye"></span>首页</router-link>
            </li>
            <li><router-link to="note" active-class="nav-active"><span class="iconfont icon-biji"></span>笔记</router-link>
            </li>
            <li><router-link to="project" active-class="nav-active"><span
                  class="iconfont icon-xiangmu"></span>作品</router-link></li>
            <li><router-link to="plan" active-class="nav-active"><span
                  class="iconfont icon-daiban"></span>规划</router-link>
            </li>
            <li><router-link to="about" active-class="nav-active"><span
                  class="iconfont icon-guanyu1"></span>关于</router-link></li>
            <li><router-link to="manger" active-class="nav-active"><span class="iconfont icon-guanliyuan1
                                  "></span>管理</router-link></li>
          </ul>
        </div>
        <div class="bgc">
          <label class="switch">
            <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#ffd43b">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path
                    d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z">
                  </path>
                </g>
              </svg></span>
            <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z">
                </path>
              </svg></span>
            <input type="checkbox" class="input" v-model="bgc" @click="changeBgc">
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <div class="m-nav" :style="{ 'height': `${open ? '0' : '220'}px` }">
        <ul @click="open = true">
          <li><router-link to="home" active-class="m-nav-active"><span
                class="iconfont icon-shouye"></span>首页</router-link>
          </li>
          <li><router-link to="note" active-class="m-nav-active"><span class="iconfont icon-biji"></span>笔记</router-link>
          </li>
          <li><router-link to="project" active-class="m-nav-active"><span
                class="iconfont icon-xiangmu"></span>作品</router-link></li>
          <li><router-link to="plan" active-class="m-nav-active"><span
                class="iconfont icon-daiban"></span>规划</router-link>
          </li>
          <li><router-link to="about" active-class="m-nav-active"><span
                class="iconfont icon-guanyu1"></span>关于</router-link></li>
          <li><router-link to="manger" active-class="m-nav-active"><span class="iconfont icon-guanliyuan1
                                  "></span>管理</router-link></li>
        </ul>
      </div>

    </nav>
    <div @click="open = true">
      <router-view v-slot="{ Component }">
        <keep-alive include="myHome">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>

    <!-- 滚动会最顶端 -->
    <div class="toTop c" v-jump :class="isfade ? 'tanchu' : ''" @click="toTop">
      <span><svg t="1681133568248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="3449" width="16" height="16">
          <path
            d="M137.94 531.49a43.85 43.85 0 0 0 6.7 61.5 43.68 43.68 0 0 0 61.4-6.7l306.9-381.5 305 379.6a43.67 43.67 0 1 0 68.1-54.7l-339.1-422a43.71 43.71 0 0 0-68.1 0z m0 330a43.85 43.85 0 0 0 6.7 61.5 43.68 43.68 0 0 0 61.4-6.7l306.9-381.5 305 379.6a43.67 43.67 0 1 0 68.1-54.7l-339.1-422a43.71 43.71 0 0 0-68.1 0z"
            p-id="3450"></path>
        </svg></span>
    </div>
    <!-- 二维嘛 -->
    <div class="weima" @click="weima = false" :style="{ 'display': `${weima ? 'block' : 'none'}` }">
      <img src="../public/weixin.png">
    </div>
    <footer>
      <div class="w">
        <div class="l">
          <span>reasonHor@163.com</span>|
          <span class="iconfont icon-weixin" @click="weima = true"></span>
        </div>
        <div class="r">
          <a href="https://github.com/ReaonHor?tab=repositories"><span class="iconfont icon-github"></span></a>|
          <a class="beian" href="https://beian.miit.gov.cn/">桂ICP备2022010893号</a>
        </div>
      </div>

    </footer>
  </div>
</template>


<script>
import '@/assets/iconfont.css'
import { throttle } from '@/util/throttle'
export default {
  data () {
    return {
      isfade: false,
      bgc: false,
      open: true,
      weima: false,
      load: true
    }
  },
  beforeMount () {
    this.load = false
  },
  mounted () {
    window.addEventListener('scroll', throttle(() => {
      let scrollY = window.scrollY
      if (scrollY > 10) {
        this.open = true
      }
      if (scrollY > 100) {
        this.isfade = true
      } else {
        this.isfade = false
      }
    }, 80, true)

    )



  },
  methods: {
    changeBgc () {
      !this.bgc ? document.body.classList.add('dark') : document.body.classList.remove('dark')
      this.$store.commit('changeBgc', !this.bgc)

    },
    toTop () {
      let sTop = document.documentElement.scrollTop || document.body.scrollTop
      if (sTop > 0) {
        window.requestAnimationFrame(this.toTop)
        window.scrollTo(0, sTop - sTop / 8)
      }
    }
  }

}
</script>
<style lang="scss">
$shadow3: 0.1rem 0.1rem 0.2rem var(--greyLight-2),
  -0.1rem -0.1rem 0.2rem var(--white);

.home-load {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  width: 100%;

  .item1,
  .item2,
  .item3 {
    position: absolute;
    background-color: transparent;
    left: calc(50% - (var(--size) / 2));
    top: calc(50% - (var(--size) / 2));
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
  }

  .loader .item1 {
    --size: 90px;
    animation: size1_1 1s infinite alternate;
    z-index: 1;
  }

  .loader .item2 {
    --size: 60px;
    animation: size1_2 1s infinite alternate;
    z-index: 2;
  }

  .loader .item3 {
    --size: 30px;
    animation: size1_3 1s infinite alternate;
    z-index: 3;
  }

  @keyframes size1_1 {

    0%,
    10% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
      box-shadow: 8px 8px 14px #c5c5c5, -8px -8px 14px #ffffff;
    }
  }

  @keyframes size1_2 {

    0%,
    40% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
      box-shadow: $shadow3;
    }
  }

  @keyframes size1_3 {

    0%,
    70% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
      box-shadow: $shadow3;
    }
  }
}

span {
  margin: 0;
  padding: 0;
}


$shadow4: inset 0.15rem 0.15rem 0.2rem var(--greyLight-2),
  inset -0.15rem -0.15rem 0.2rem var(--white);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.loading {
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  cursor: default;
}

#app {
  padding-top: 60px;
}

:root {
  --bgc1: #e4ebf8;
  --color1: #ff9900;
  --color2: #333333;
  --shadom1: 0 0 0 transparent, -0.2rem -0.2rem 0.4rem rgba(255, 255, 255, 0.45);
  --primary: #6d5dfc;
  --greyLight-1: #e4ebf5;
  --greyLight-2: #c8d0e7;
  --greyLight-3: #bec8e4;
  --greyDark: #9baacf;
  --white: #fff;
  --color3: #999;
  --color4: #fff;
  --color5: #888;
}

.dark {
  --bgc1: #1a1d24;
  --color1: #68a7eb;
  --color2: #cccccc;
  --shadom1: 0 0 0 transparent, -0.2rem -0.2rem 0.4rem rgba(66, 66, 66, 0.3);
  --greyDark: #9baacf;
  --greyLight-2: #091318;
  --white: #39393c;
  --color: #666;
  --color4: #000;
  --color5: #999;
}

html,
body {
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  position: relative;
  top: 0;
  left: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-weight: 400;
  color: var(--color2);
  background-color: var(--bgc1);
  transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease !important;
}

ul,
li {
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

//二维码
.weima {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
  }
}

//滑动回最顶端
.toTop {
  position: fixed;
  right: 50px;
  bottom: 85px;
  width: 3.12rem;
  height: 3.12rem;
  z-index: 999;
  border-radius: 5px;
  text-align: center;
  line-height: 4.06rem;
  background-color: var(--bgc1);
  transform: translateX(100px);
  transition: all 0.3s;

  span {
    svg {
      fill: var(--color2);
      width: 60%;
      height: 60%;
    }
  }
}

.tanchu {
  transform: translateX(0);
}

.c {
  box-shadow: $shadow3;
}

.down {
  box-shadow: $shadow4;
  color: var(--color1) !important;
}

.m-nav {
  position: absolute;
  top: 60px;
  width: 100%;
  height: 220px;
  background-color: var(--bgc1);
  z-index: 20;
  box-shadow: 0.15rem 0.15rem 0.3rem rgba(0, 0, 0, 0.08), 0 0 0 transparent;
  transition: all 0.2s ease-out;
  overflow: hidden;

  li {
    .m-nav-active {
      color: var(--color1);
    }

    padding: 6px 0;

    a {
      letter-spacing: 2px;
      font-size: 14px;
      color: var(--color2);
    }
  }
}

@media screen and (min-width: 811px) and (max-width: 1000px) {
  html {
    font-size: 14px;
  }
}

@media screen and (min-width: 811px) {
  .icon-m {
    display: none;
  }

  .m-nav {
    display: none;
  }
}

@media screen and (max-width: 810px) {
  html {
    font-size: 13px !important;
  }

  .w {
    width: 100% !important;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon-m {
    width: 64px;

    .iconfont {
      font-size: 32px;
    }
  }

  .login {
    width: 170px;
    height: 60px;
  }

  .nav {
    display: none !important;
  }

  .beian {
    display: none !important;
  }

  .md-editor-content .md-editor-preview,
  .md-editor-content .md-editor-html {
    padding: 10px 20px;
    font-size: 14px !important;
    position: relative;
    word-break: break-all;
  }
}

@media screen and (max-width: 400px) {
  .md-editor-content .md-editor-preview {
    padding: 0 !important;
  }
}


.fade {
  box-shadow: 0.15rem 0.15rem 0.3rem rgba(0, 0, 0, 0.08), 0 0 0 transparent;
  transform: translateY(-100%);
}

.w {
  width: 80%;
  display: flex;
  flex-direction: row;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  height: 60px;
  text-align: center;
  transform: translateY(0);
  background-color: var(--bgc1);
  transition: all 0.5s ease;
  z-index: 999;

  .login {
    line-height: 60px;
    width: 12.5rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
  }

  .nav {
    display: flex;
    flex: 1;
    flex-direction: row-reverse;
    align-items: center;

    ul {
      height: 40px;

      li {
        float: left;
        height: 100%;

        .iconfont {
          font-size: 14px;
        }

        .icon-18 {
          font-size: 18px;
        }

        a {
          padding: 12px 8px;
          display: block;
          font-size: 14px;
          color: var(--color2);
          border-bottom: 2px solid transparent;
          letter-spacing: 1px;
          transition: 0.2s;

          &:hover {
            color: var(--color1);
            border-bottom: 2px solid var(--color1);
          }
        }

        .nav-active {
          color: var(--color1);
          border-bottom: 2px solid var(--color1);
        }
      }
    }
  }

  .bgc {
    width: 64px;
    display: flex;
    align-items: center;

    .switch {
      font-size: 17px;
      position: relative;
      display: inline-block;
      transform: scale(0.8);
      width: 64px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--bgc1);
      transition: 0.4s;
      border-radius: 30px;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 30px;
      width: 30px;
      border-radius: 20px;
      left: 2px;
      bottom: 2px;
      z-index: 2;
      background-color: white;
      transition: 0.4s;
    }

    .sun svg {
      position: absolute;
      top: 6px;
      left: 36px;
      z-index: 1;
      width: 24px;
      height: 24px;
    }

    .moon svg {
      fill: #dae4f6;
      position: absolute;
      top: 5px;
      left: 5px;
      z-index: 1;
      width: 24px;
      height: 24px;
    }

    /* .switch:hover */
    .sun svg {
      animation: rotate 15s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    /* .switch:hover */
    .moon svg {
      animation: tilt 5s linear infinite;
    }

    @keyframes tilt {
      0% {
        transform: rotate(0deg);
      }

      25% {
        transform: rotate(-10deg);
      }

      75% {
        transform: rotate(10deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }

    .input:checked+.slider {
      background-color: #183153;
    }

    .input:focus+.slider {
      box-shadow: 0 0 1px #183153;
    }

    .input:checked+.slider:before {
      transform: translateX(30px);
    }
  }
}

footer {
  width: 100%;
  height: 4.68rem;
  box-shadow: var(--shadom1);
  display: flex;
  align-items: center;

  .w {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: var(--color3);
    font-size: 16px;

    div {
      height: 1.56rem;

      span,
      .beian {
        font-size: 16px;
        padding: 0 10px;
        line-height: 1.56rem;
        color: var(--color3);
        cursor: pointer;

        &:hover {
          color: var(--color1);
        }
      }

      .iconfont {
        font-size: 16px;
      }
    }
  }
}
</style>
