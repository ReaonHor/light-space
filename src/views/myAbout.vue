<template>
  <div class="about wb">
    <h3><span class="iconfont icon-guanyu1"></span>关于</h3>
    <div class="content">
      <img src="about.jpg">
      <p>你好！我是这个网站的作者，目前是一名在校大学生，这是我独立开发的笔记与项目记录网站<i>light-space</i></p>
      <p>这是个响应式网站，看似结构简单，实际工程量不小，目前已适配手机、电脑等正常屏幕大小。个人偏爱简约+实用风格，UI设计灵感来源于<a href="https://uiverse.io/">uiverse</a>以及<a href="https://github.com/xiangjianan">@xiangjianan</a>的博客,整个网站从前端到后端到部署至维护，均为自己做</p>
      <p>由于本人小白菜一枚，笔记也仅供本人，请不要参考笔记内容！</p>
      <p>图标以及图片均为免费开源库所取，如有侵权，请联系我！</p>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  img {
    width: 10rem !important;
    margin: 0 1rem 1rem 1rem !important;
  }
}
.wb {
  width: 80%;
  margin: 0 auto;
}
.about {
  height: calc(100vh - 135px);
  h3 {
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    font-weight: 400;
    padding: 2rem 0;
    .iconfont {
      font-size: 2.5rem;
    }
  }
  .content {
    img {
      float: right;
      width: 15rem;
      margin: 0 2rem 2rem 2rem;
    }
    p {
      margin: 0 0 1rem;
      color: var(--color5);
      letter-spacing: 0.35rem;
      font-size: 1rem;
      text-indent: 2em;
    }
    a {
      color: var(--color5);
      &:hover {
        color: var(--color1);
      }
    }
  }
}
</style>