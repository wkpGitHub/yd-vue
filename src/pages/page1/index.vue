<template>
  <div>
    <p>page1<Button type="primary" @click="increment">add</Button>{{count}}</p>
    <Dialog />
  </div>
</template>

<script>
import Dialog from './Dialog.vue';
import {mapState, mapMutations} from 'vuex';
export default {
  components: { Dialog },
  computed: {
    ...mapState(['count'])
  },
  created() {
    // 请求示例
    this.$axios.get(`/list`).then(res => {
      console.log(res.data)
    })
  },
  methods: {
    ...mapMutations(['increment'])
  }
}
</script>