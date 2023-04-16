<template>
  <div class="notelist">
    <div class="head">
      <h3><span class="iconfont" :class="typeIcon"></span> {{typeName}}</h3>
      <div class="add c" v-jump @mouseup="this.$router.push({name:'admin',query:{typeId:typeId,be:0,typeName:typeName}})"> <span class="iconfont icon-bianji"></span></div>
    </div>
    <div class="tab-container">
      <div class="tab-ka" v-for="(item) in notelist" :key="item.noteid">
        <div class="note c" v-jump @mouseup="this.$router.push({name:'content',query:{id:item._id}})">
          <div class="icon"><span class="iconfont" :class="typeIcon"></span></div>
          <h2>{{ item.title }}</h2>
          <span class="name">{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      notelist: [],
      typeId: '',
      typeName: '',
      typeIcon: ''
    }
  },
  created () {

  },
  mounted () {
    let { name, icon, id } = this.$route.query
    this.typeName = name
    this.typeIcon = icon
    this.typeId = id
    axios.get(`http://1.117.218.200:3000/user/notes?typeId=${this.typeId}`).then(res => {
      if (res.data.code == '200') {
        this.notelist = [...res.data.data].reverse()
      } else {
        console.log('获取文章列表失败')
      }
    })

  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  .notelist {
    width: 90% !important;
    .tab-ka {
      width: 100% !important;
    }
    .tab-container {
      width: 100% !important;
      .note {
        height: 110px !important;
      }
    }
  }
}
.notelist {
  width: 80%;
  margin: 0 auto;
  min-height: calc(100vh - 135px);
  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.3rem;
    .iconfont {
      font-size: 3rem;
    }
  }
  .head {
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
  }
  .add {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    text-align: center;
    line-height: 3rem;
    color: var(--color2);
    cursor: pointer;

    .iconfont {
      font-size: 1.5rem;
    }
  }
}
.tab-container {
  position: relative;
  width: 80%;
  overflow: hidden;
  padding: 2rem 0px;
  margin: 0 auto;
  .tab-ka {
    margin: 1.5rem auto;
    padding: 0 10px;
    .note {
      position: relative;
      display: block;
      width: 100%;
      height: 124px;
      border-radius: 15px;
      transition: all 0.2s;
      background-color: var(--bgc1);
      display: flex;
      align-items: center;
      h2 {
        text-align: center;
        font-weight: 400;
        letter-spacing: 2px;
        padding-bottom: 30px;
      }
      .name {
        position: absolute;
        right: 14px;
        bottom: 10px;
        font-weight: 300;
        letter-spacing: 2px;
      }
      .icon {
        width: 38%;
        max-width: 10rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconfont {
          font-size: 55px;
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
</style>