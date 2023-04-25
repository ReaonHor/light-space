<template>
  <div class="noteadmin wm">
    <h3><span class="iconfont icon-guanliyuan1"></span>管理</h3>
    <div class="edit" v-show="isedit">
      <h3 class="typeName"><em>{{typeName  }}</em></h3>
      <my-tab :tabName="['发布']"></my-tab>
      <div class="title">
        <div class="input-container">
          <input class="input-field" type="text" v-model="newText.title">
          <label for="input-field" class="input-label">标题</label>
          <span class="input-highlight"></span>
        </div>
      </div>
      <MdEditor v-model="newText.text" :theme="this.$store.state.bgc" @onUploadImg="onUploadImg" />
      <div class="submit c" v-jump @mouseup="submit">保存</div>

    </div>
    <div class="change" v-show="!isedit">
      <h3 class="typeName"><em>{{title }}</em></h3>
      <my-tab :tabName="['编辑']"></my-tab>
      <div class="title">
        <div class="input-container">
          <input class="input-field" type="text" v-model="oldText.title">
          <label for="input-field" class="input-label">标题</label>
          <span class="input-highlight"></span>
        </div>
      </div>
      <MdEditor v-model="oldText.text" :theme="this.$store.state.bgc" />
      <div class="submit c" v-jump @mouseup="update">修改</div>
    </div>

  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ElMessage } from 'element-plus'
import axios from 'axios'
import { getTime } from '@/util/getTime';

export default {
  data () {
    return {
      oldText: {
        title: '',
        text: '',
        time: '',
        type: ''
      },
      newText: {
        title: '',
        text: '',
        time: '',
        type: ''
      },
      isedit: true,
      typeName: '',
      typeId: '0',
      title: '',
      id: '',
      beifen: {
        text: '',
        title: ''
      },
    }
  },
  created () {
  },
  mounted () {
    let { typeName, typeId, be, title, id } = this.$route.query
    if (be == '0') {
      this.typeId = typeId
      this.typeName = typeName
      this.isedit = true
    } else {
      this.id = id
      this.title = title
      this.isedit = false
      this.getNote()
    }


  },
  methods: {

    getNote () {
      axios.get(`http://1.117.218.200:3000/user/note?id=${this.id}`).then(res => {
        if (res.data.code == '200') {
          this.oldText.text = res.data.data[0].text
          this.oldText.title = res.data.data[0].title
          this.beifen.text = res.data.data[0].text
          this.beifen.title = res.data.data[0].title
        }
      })
    },
    //发送到后端
    submit () {
      if (this.newText.text) {
        getTime().then(res => {
          let { years, mon, day } = res
          return `${years}年${mon}月${day}`
        }).then(time => {
          axios.post("http://1.117.218.200:3000/admin/submit", {
            title: this.newText.title,
            text: this.newText.text,
            time,
            typeId: this.typeId
          }).then(res => {
            if (res.data.code == '200') {
              this.newText.text = '',
                this.newText.title = ''
              ElMessage({
                message: '提交成功',
                type: 'success',
              })
            } else {
              ElMessage.error('提交失败')
            }
          })
        })
      }
    },
    //编辑
    update () {
      if (this.beifen.text == this.oldText.text && this.beifen.title == this.oldText.title) {
        ElMessage({
          message: '内容未修改',
          type: 'warning',
        })
      } else {
        getTime().then(res => {
          let { years, mon, day } = res
          return `${years}年${mon}月${day}`
        }).then(time => {
          axios.post(`http://1.117.218.200:3000/admin/update`, {
            id: this.id,
            title: this.oldText.title,
            text: this.oldText.text,
            time,
          }).then(res => {
            if (res.data.code == '200') {
              ElMessage({
                message: '修改成功',
                type:'success'
              })
            } else {
              ElMessage.error('修改失败')
            }
          })
        })
      }
    },
    async onUploadImg (files, callback) {
      const res = await Promise.all(
        files.map((file) => {
          return new Promise((rev, rej) => {
            const form = new FormData();
            form.append('file', file);
            axios
              .post('http://1.117.218.200:3000/upload/img', form, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                }
              })
              .then((res) => rev(res))
              .catch((error) => rej(error));
          });
        })
      );

      callback(res.map((item) => item.data.data));
    }


  },

  components: {
    MdEditor
  }

}
</script>



<style lang="scss" scoped>
.wm {
  width: 80%;
  margin: 0 auto;
}

.noteadmin {
  h3 {
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    font-weight: 400;
    margin-top: 36px;
    .iconfont {
      font-size: 2.5rem;
    }
  }
  .typeName {
    font-size: 2rem;
  }
  .title {
    /* Input container */
    display: flex;
    justify-content: center;
    align-items: center;
    .input-container {
      position: relative;
      margin: 20px;
    }

    /* Input field */
    .input-field {
      display: block;
      width: 24rem;
      font-size: 16px;
      border: none;
      border-bottom: 2px solid #ccc;
      outline: none;
      background-color: transparent;
      padding: 5px;
    }

    /* Input label */
    .input-label {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 22px;
      color: rgba(204, 204, 204, 0);
      pointer-events: none;
      transition: all 0.3s ease;
    }

    /* Input highlight */
    .input-highlight {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0;
      background-color: var(--color2);
      transition: all 0.3s ease;
    }

    /* Input field:focus styles */
    .input-field:focus + .input-label {
      top: -20px;
      font-size: 16px;
      color: var(--color2);
    }

    .input-field:focus + .input-label + .input-highlight {
      width: 24rem;
    }
  }

  .submit {
    margin: 20px auto;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    text-align: center;
    line-height: 4rem;
    color: var(--color2);
    cursor: pointer;
  }
}
</style>