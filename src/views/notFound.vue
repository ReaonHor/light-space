<template>
  <div class="notFound">
    <div>
      <h1 class="animate__animated animate__rubberBand">404 not Found</h1>
      <h3>请检查路径是否正确</h3>
    </div>
  </div>
</template>

<script>
import 'animate.css'
export default {

}
</script>
<style lang="scss" scoped>
.notFound {
  position: fixed;
  width: 100%;
  height: 100%;
  top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bgc1);
  z-index: 9999;
  text-align: center;
  h1 {
    font-size: 3rem;
    letter-spacing: 0.5rem;
    color: var(--color2);
  }
  .animate__rubberBand {
    transition-delay: 0.9s;
  }
}
</style>
