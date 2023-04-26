<template>
  <div class="prj wd">
    <h3><span class="iconfont icon-xiangmu"></span>作品</h3>
    <my-tab :tabName="['全部', 'HTML5', '前端', '全栈']" @chooseTab="chooseTab1"></my-tab>
    <div class="tab-container" :style="tabHeight">
      <div class="tab-ka" v-for="(item) in prj" :key="item.id" :style="transform(item.lo, item.block)">
        <div>
          <a :href="item.url">
            <div class="cut">
              <img :src="item.imageUrl">
            </div>
          </a>
        </div>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <h3><span class="iconfont icon-bianji"></span>Demo</h3>
    <my-tab :tabName="['全部', 'CSS', 'webSocket']" @chooseTab="chooseTab2"></my-tab>
    <div class="tab-container" :style="demoHeight">
      <div class="tab-ka" v-for="(item) in demo" :key="item.id" :style="transform(item.lo, item.block)">
        <div>
          <a href="">
            <img :src="item.imageUrl">
          </a>
        </div>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { tabContainer } from '@/util/tabContainer'
import { position } from '@/util/position'
import { p_tabHeight } from '@/util/tabHeight'
export default {
  data () {
    return {
      prj_data: [{
        id: 0,
        url: 'https://github.com/ReaonHor/light-space',
        imageUrl: require('../assets/light.png'),
        name: 'light-Space',
        lo: 0,
        lo3: true,
        block: true
      },
      {
        id: 1,
        url: 'http://eason.horblog.live',
        imageUrl: require('../assets/eason.png'),
        name: 'Eason-Chan',
        lo: 1,
        lo1: true,
        block: true
      },
      {
        id: 2,
        url: 'https://github.com/ReaonHor/movie',
        imageUrl: require('../assets/寻影.png'),
        name: '寻影',
        lo: 2,
        lo2: true,
        block: true
      },
      {
        id: 3,
        url: 'https://github.com/ReaonHor/jianshu-views',
        imageUrl: require('../assets/简书.png'),
        name: '简书',
        lo: 3,
        lo3: true,
        block: true
      },
      {
        id: 4,
        url: '',
        imageUrl: require('../assets/netmusic.png'),
        name: '网易云小程序',
        lo: 4,
        lo2: true,
        block: true
      },
      ],
      prj: [],
      isTrue: true,
      tabHeight: '',
      demo_data: [{
        id: 0,
        url: '',
        imageUrl: '',
        name: 'Demo1',
        lo: 0,
        lo3: true,
        block: true
      },
      {
        id: 1,
        url: '',
        imageUrl: '',
        name: 'Demo2',
        lo: 1,
        lo1: true,
        block: true
      },
      {
        id: 2,
        url: '',
        imageUrl: '',
        name: 'Demo3',
        lo: 2,
        lo1: true,
        block: true
      },
      {
        id: 3,
        url: '',
        imageUrl: '',
        name: 'Demo4',
        lo: 3,
        lo1: true,
        block: true
      },
      {
        id: 4,
        url: '',
        imageUrl: '',
        name: 'Demo5',
        lo: 4,
        lo2: true,
        block: true
      },
      ],
      demo: [],
      demoHeight: ''
    }
  },
  methods: {
    chooseTab1 (index) {
      this.prj = [...tabContainer(index, this.prj, this.prj_data)]
      this.tabHeight = p_tabHeight(this.prj)
    },
    chooseTab2 (index) {
      this.demo = [...tabContainer(index, this.demo, this.demo_data)]
      this.demoHeight = p_tabHeight(this.demo)
    },
    transform (lo, block) {
      return position(lo, block)
    }
  },
  mounted () {
    this.chooseTab1()
    this.chooseTab2()
  }
}
</script>


<style lang="scss" scoped>
$shadow5: 0.32rem 0.32rem 0.62rem var(--greyLight-2),
  -0.21rem -0.21rem 0.52rem var(--white);

.wd {
  width: 80%;
  margin: 0 auto;
}

@media screen and (min-width: 701px) and (max-width: 880px) {
  .tab-container {
    .cut {
      width: 130px !important;
      height: 130px !important;
    }

    a {
      width: 200px !important;
      height: 160px !important;
    }
  }
}

@media screen and (min-width: 880px) and (max-width: 1020px) {
  .tab-container {
    .cut {
      width: 160px !important;
      height: 160px !important;
    }

    a {
      width: 220px !important;
      height: 180px !important;
    }
  }
}

@media screen and (min-width: 1000px) and (max-width: 1240px) {
  .tab-container {
    .cut {
      width: 180px !important;
      height: 180px !important;
    }

    a {
      width: 260px !important;
      height: 200px !important;
    }
  }
}

@media screen and (max-width: 700px) {
  .wd {
    width: 100% !important;
    padding: 0 10px;
  }

  .tab-container {
    width: 100% !important;
    padding: 15px 0px !important;

    .tab-ka {
      width: 100% !important;
      // transform: translateX(0px) !important;
    }

    .cut {
      width: 90% !important;
      height: 90% !important;
      border-radius: 10px !important;
      overflow: hidden !important;

      img {
        transform: scale(.7);
      }

    }

    a {
      width: 100% !important;
      height: 138px !important;
      overflow: hidden;
    }
  }
}

.prj {
  h3 {
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    font-weight: 400;
    padding-top: 36px;

    .iconfont {
      font-size: 2.5rem;
    }
  }

  .tab-container {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    transition: all 0.8s;

    .tab-ka {
      width: 33.333%;
      padding: 15px 0px;
      position: absolute;
      opacity: 1;
      transition: all 0.8s;
      background-color: var(--bgc1);

      &:hover {
        p {
          color: var(--color1);
        }
      }

      .cut {
        width: 230px;
        height: 230px;
        border-radius: 50%;
        overflow: hidden;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        display: block;
        margin: 0 auto;
        width: 320px;
        height: 246px;
        border-radius: 10px;
        transition: all 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bgc1);
        box-shadow: $shadow5;

        img {
          width: 100%;
        }

        &:hover {
          box-shadow: 0.25rem 0.25rem 0.45rem var(--greyLight-2),
            -0.15rem -0.15rem 0.3rem var(--white);
        }
      }

      p {
        margin: 10px;
        text-align: center;
        font-size: 18px;
        color: var(--color2);
        transition: all 0.2s;
        letter-spacing: 1px;
        font-weight: 350;
      }
    }
  }
}
</style>