<template>
  <div class="ka-nav" @click="choose1($event)">
    <div class="c" v-for="(item,index) in tabName" :key="index" :class="index==0?'active':''" :data-index="index">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabName: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    choose1 (e) {
      if(e.target.classList[0]=='ka-nav') {
        return
      }
      for (let i of e.target.parentNode.children) {
        i.classList.remove('active')
        i.classList.add('c')
      }
      e.target.classList.remove('c')
      e.target.classList.add('active')
      this.$emit('chooseTab', e.target.dataset.index)
    }
  }
}
</script>

<style lang="scss" scoped>
$shadow3: 0.1rem 0.1rem 0.2rem var(--greyLight-2),
  -0.1rem -0.1rem 0.2rem var(--white);
$shadow4: inset 0.15rem 0.15rem 0.2rem var(--greyLight-2),
  inset -0.15rem -0.15rem 0.2rem var(--white);
// @media screen and (max-width: 700px) {
//   div {
//     transform: scale(0.92);
//   }
// }
.ka-nav {
  display: flex;
  cursor: pointer;
  margin: 2.5rem 0 2rem;
  flex-wrap: wrap;
  div {
    width: 6rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    margin: 0.3rem 0.3rem;
  }

  .c {
    box-shadow: $shadow3;
  }
  .active {
    box-shadow: $shadow4;
    color: var(--color1);
  }
}
</style>