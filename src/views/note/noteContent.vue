<template>
  <div class="back c" v-jump @mouseup="this.$router.go(-1)">返回</div>
  <div class="head">
    <h3><em>#{{ title }}</em></h3>
    <div class="add c" v-jump @mouseup="this.$router.push({name:'admin',query:{id:id,be:1,title:title}})"> <span class="iconfont icon-bianji"></span></div>
  </div>
  <div class="notecontent">
    <div class="content">
      <MdEditor v-model="text" :editorId="edid" previewOnly :theme="this.$store.state.bgc" />
    </div>
    <div class="mulu">
      <MdCatalog :editorId="edid" :scrollElement="scrollElement" :theme="this.$store.state.bgc" />
    </div>
  </div>
  <div class="back c" v-jump @mouseup="this.$router.go(-1)">返回</div>
</template>

<script>

import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import axios from 'axios'

export default {
  data () {
    return {
      title: '',
      text: '',
      id: '',
      edid: 'my-editor',
      scrollElement: ''
    }
  },
  created () {
    this.scrollElement = document.documentElement
    this.id = this.$route.query.id
    axios.get(`http://1.117.218.200:3000/user/note?id=${this.id}`).then(res => {
      if (res.data.code == '200') {
        console.log(res.data)
        this.text = res.data.data[0].text
        this.title = res.data.data[0].title
      }
    })

  },
  mounted () {


  },
  methods: {

  },



  components: {
    MdEditor,
    MdCatalog: MdEditor.MdCatalog
  }

}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  .content {
    padding: 0 0 0 10px !important;
  }
}

.back {
  width: 80%;
  height: 2rem;
  margin: 1rem auto;
  text-align: center;
  line-height: 2rem;
  letter-spacing: 1.5rem;
  border-radius: 2rem;
  color: var(--color2);
  cursor: pointer;
}
.head {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
}
.add {
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  border-radius: 50%;
  text-align: center;
  line-height: 3rem;
  color: var(--color2);
  cursor: pointer;

  .iconfont {
    font-size: 1.5rem;
  }
}
h3 {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.3rem;
}
.notecontent {
  display: flex;
  border-radius: 2rem;
  background-color: var(--color4);
  margin: 0 auto 1rem;
  justify-content: center;
  padding: 2rem 0;
  .mulu {
    position: sticky;
    top: 0;
    padding-top: 2rem;
    width: 15rem;
    height: 100vh;
    background-color: var(--color4);
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
      width: 0;
    }
  }
  .content {
    position: relative;
    width: 70%;
    padding-right: 1rem;
  }
}
</style>