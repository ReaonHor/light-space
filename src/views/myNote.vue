<template>
  <div class="note wn">
    <h3><span class="iconfont icon-biji"></span>笔记</h3>
    <my-tab :tabName="['全部','JavaScript','TypScript','H+C','Vue','React','Node.js','数据库','uni-app','其他']" @chooseTab="chooseTab1"></my-tab>
    <div class="tab-container" :style="tabHeight">
      <div class="tab-ka" v-for="(item) in notes" :key="item.id" :style="transform(item.lo,item.block)">
        <div class="note c" v-jump @mouseup="this.$router.push({name:'showNote',query:{id:item.id,name:item.name,icon:item.icon}})">
          <div class="icon"><span class="iconfont" :class="item.icon"></span></div>
          <h2>{{ item.name }}</h2>
          <span class="name">{{ item.type }}</span>
        </div>
      </div>
    </div>
    <h3><span class="iconfont icon-huixingzhen"></span>官方文档</h3>
    <my-tab :tabName="['全部','前端','后端','UI','组件库']" @chooseTab="chooseTab2"></my-tab>
    <div class="tab-container" :style="ofcTabHeight">
      <div class="tab-ka" v-for="(item) in ofc" :key="item.id" :style="transform(item.lo,item.block)">
        <div class="note c" v-jump>
          <div class="icon"></div>
          <h2></h2>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tabContainer } from '@/util/tabContainer'
import { position } from '@/util/position'
import { n_tabHeight } from '@/util/tabHeight'
export default {
  data () {
    return {
      notes: [
        {
          id: 0,
          lo: 0,
          name: 'JavaScript',
          icon: 'icon-js',
          lo1: true,
          type: 'JavaScript',
          block: true
        },
        {
          id: 1,
          lo: 1,
          name: 'HTML',
          icon: 'icon-zujian',
          type: 'H+C',
          lo3: true,
          block: true
        },
        {
          id: 2,
          name: 'Css',
          lo: 2,
          icon: 'icon-css3',
          lo3: true,
          type: 'H+C',
          block: true
        },
        {
          id: 3,
          name: 'Vue2',
          icon: 'icon-logo-vue',
          lo: 3,
          lo4: true,
          type: 'Vue',
          block: true
        },
        {
          id: 4,
          name: 'Vue3',
          icon: 'icon-logo-vue',
          lo: 4,
          lo4: true,
          type: 'Vue',
          block: true
        },
        {
          id: 5,
          name: 'Vuex',
          icon: 'icon-logo-vue',
          lo: 5,
          lo4: true,
          type: 'Vue',
          block: true
        },
        {
          id: 6,
          name: 'React',
          icon: 'icon-react',
          lo: 6,
          lo5: true,
          type: 'React',
          block: true
        },
        {
          id: 7,
          name: 'Node.js',
          icon: 'icon-node-js',
          lo: 7,
          lo6: true,
          type: 'Node.js',
          block: true
        },
        {
          id: 8,
          name: 'webpack',
          icon: 'icon-zujian',
          lo: 8,
          lo6: true,
          type: 'Node.js',
          block: true
        },
        {
          id: 9,
          name: 'vite',
          icon: 'icon-zujian',
          lo: 9,
          lo6: true,
          type: 'Node.js',
          block: true
        },
        {
          id: 10,
          name: 'MongoDB',
          icon: 'icon-odbc-full',
          lo: 10,
          lo7: true,
          type: '数据库',
          block: true
        },
        {
          id: 11,
          name: 'MySQL',
          icon: 'icon-odbc-full',
          lo: 11,
          lo7: true,
          type: '数据库',
          block: true
        },
        {
          id: 12,
          name: 'Http',
          icon: 'icon-wangluo',
          lo: 12,
          lo9: true,
          type: '其他',
          block: true
        },
        {
          id: 13,
          name: 'Tcp/Ip',
          icon: 'icon-wangluo',
          lo: 13,
          lo9: true,
          type: '其他',
          block: true
        },
        {
          id: 14,
          name: '浏览器',
          icon: 'icon-chrome',
          lo: 14,
          lo9: true,
          type: '其他',
          block: true
        },
        {
          id: 15,
          name: 'uni-app',
          icon: 'icon-uni-app',
          lo: 15,
          lo8: true,
          type: 'uni-app',
          block: true
        },
        {
          id: 16,
          name: '算法',
          icon: 'icon-react',
          lo: 16,
          lo9: true,
          type: '其他',
          block: true
        },
        {
          id: 17,
          name: '数据结构',
          icon: 'icon-react',
          lo: 17,
          lo9: true,
          type: '其他',
          block: true
        },
        {
          id: 18,
          name: 'TypeScript',
          icon: 'icon-ts',
          lo: 18,
          lo2: true,
          type: 'TypeScript',
          block: true
        },
        {
          id: 19,
          name: 'Koa2/Express',
          icon: 'icon-node-js',
          lo: 19,
          lo6: true,
          type: 'Node.js',
          block: true
        }
      ],
      mynotes: [],
      ofc: [
        {
          id: 0,
          url: '',
          lo: 0,
          lo2: true,
          block: true
        },
        {
          id: 1,
          url: '',
          lo: 1,
          lo2: true,
          block: true
        },
        {
          id: 2,
          url: '',
          lo: 2,
          lo1: true,
          block: true
        },
        {
          id: 3,
          url: '',
          lo: 3,
          lo1: true,
          block: true
        },
        {
          id: 4,
          url: '',
          lo: 4,
          lo3: true,
          block: true
        },
      ],
      myofc: [],
      tabHeight: '',
      ofcTabHeight: ''
    }
  },
  methods: {
    chooseTab1 (index) {
      this.mynotes = [...tabContainer(index, this.mynotes, this.notes)]
      this.tabHeight = n_tabHeight(this.mynotes)
    },
    chooseTab2 (index) {
      this.myofc = [...tabContainer(index, this.myofc, this.ofc)]
      this.ofcTabHeight = n_tabHeight(this.myofc)
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
@media screen and (min-width: 700px) and (max-width: 879px) {
  .tab-container {
    .note {
      width: 185px !important;
      height: 80px !important;
    }
  }
}

@media screen and (min-width: 880px) and (max-width: 1020px) {
  .tab-container {
    .note {
      width: 220px !important;
      height: 90px !important;
    }
  }
}
@media screen and (min-width: 1020px) and (max-width: 1240px) {
  .tab-container {
    .note {
      width: 260px !important;
      height: 100px !important;
    }
  }
}
@media screen and (max-width: 700px) {
  .wn {
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
    .note {
      width: 95% !important;
      height: 90px !important;
      box-shadow: 0.25rem 0.25rem 0.45rem var(--greyLight-2),
        -0.15rem -0.15rem 0.3rem var(--white);
    }
  }
}
.wn {
  width: 80%;
  margin: 0 auto;
}

.note {
  h3 {
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    font-weight: 400;
    padding-top: 2.25rem;
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
      transition: transform 0.8s;
      .note {
        position: relative;
        margin: 0 auto;
        display: block;
        width: 320px;
        height: 124px;
        border-radius: 15px;
        transition: all 0.2s;
        background-color: var(--bgc1);
        display: flex;
        align-items: center;
        h2 {
          text-align: center;
          width: 33.3%;
          font-weight: 400;
          letter-spacing: 2px;
          padding-bottom: 1.875rem;
        }
        .name {
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-weight: 300;
          letter-spacing: 2px;
        }
        .icon {
          width: 38%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .iconfont {
            font-size: 3.43rem;
          }
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
}
</style>