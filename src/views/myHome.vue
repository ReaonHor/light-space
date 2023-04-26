<template>
  <div class="home">
    <my-time></my-time>
    <div class="home-menu">
      <div class="home-note c" v-jump @mouseup="this.$router.push({ name: 'note' })">
        <span class="iconfont icon-biji"></span>
        <span>笔记</span>
      </div>
      <div class="home-prj c" v-jump @mouseup="this.$router.push({ name: 'project' })">
        <span class="iconfont icon-xiangmu"></span>
        <span>作品</span>
      </div>
      <div class="home-about c" v-jump @mouseup="this.$router.push({ name: 'about' })">
        <span class="iconfont icon-guanyu1"></span>
        <span>关于</span>
      </div>
      <div class="home-plan c" v-jump @mouseup="this.$router.push({ name: 'plan' })">
        <span class="iconfont icon-daiban"></span>
        <span>待办</span>
      </div>
    </div>
  </div>
</template>

<script setup>



</script>

<script>
import myTime from '@/components/myTime.vue'
export default {
  name: 'myHome',
  components: {
    myTime
  }

}
</script>

<style lang="scss" scoped>
// 时钟的阴影设计
// inset .2rem .2rem .4rem var(--greyDark),inset -.2rem -.2rem .4rem var(--primary-dark-2)
$shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
  -0.2rem -0.2rem 0.5rem var(--white);
$inner-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
  -0.2rem -0.2rem 0.5rem var(--white);
$little-inner-shadow: inset 1px 1px 1px var(--greyLight-2),
  inset -1px -1px 1px var(--white);

@media screen and (max-width: 700px) {
  .home {
    min-height: calc(100vh - 135px);
    position: relative;

    .home-menu {
      width: 100% !important;
      padding: 10px;
      margin: 30px 0 !important;
      justify-content: center;
      height: 272px !important;

      div {
        width: 100% !important;
        height: 50px !important;
        line-height: 50px !important;
        font-size: 18px !important;
        letter-spacing: 5px;

        .iconfont {
          font-size: 18px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 701px) and (max-width: 959px) {
  .home-menu {
    width: 730px !important;
    height: 218px !important;
    margin: 20px auto 0 !important;
    justify-content: center;
    height: 272px !important;

    div {
      width: 315px !important;
      height: 82px !important;
      line-height: 82px !important;
      font-size: 24px !important;
      letter-spacing: 3px;

      .iconfont {
        font-size: 24px !important;
      }
    }
  }
}

@media screen and (min-width: 960px) and (max-width: 1240px) {
  .home-menu {
    width: 960px !important;
    height: 220px !important;
    margin: 30px auto !important;
    justify-content: center;
    height: 272px !important;

    div {
      width: 400px !important;
      height: 90px !important;
      line-height: 90px !important;
      font-size: 26px !important;
      letter-spacing: 5px;

      .iconfont {
        font-size: 26px !important;
      }
    }
  }
}

.home {
  .home-menu {
    width: 68rem;
    height: 17rem;
    margin: 4rem auto 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    cursor: pointer;

    div {
      width: 28rem;
      height: 7rem;
      border-radius: 1rem;
      line-height: 7rem;
      text-align: center;
      font-size: 2rem;
      letter-spacing: 0.7rem;

      .iconfont {
        font-size: 2rem;
      }
    }

    .c {
      box-shadow: 0.2rem 0.2rem 0.4rem var(--greyLight-2),
        -0.2rem -0.2rem 0.4rem var(--white);
    }

    .down {
      box-shadow: inset 0.2rem 0.2rem 0.4rem var(--greyLight-2),
        inset -0.2rem -0.2rem 0.4rem var(--white);
      color: var(--color1);
    }
  }
}
</style>
