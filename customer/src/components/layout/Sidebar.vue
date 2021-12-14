<template>
  <el-menu class="sider-menu" :default-active="$route.path" :collapse="isCollapse"
    :unique-opened="false"  mode="vertical" router>
    <el-menu-item v-for="route in routes" :index="route.path" @click="addTags(route)" :key="route.path">
      <i :class="route.meta.icon"></i>
      <span slot="title">{{ route.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  },

  created() {
    console.log(this.$route.path)
  },
  data() {
    return {
      routes: this.$router.options.routes.find(route => route.path === '/').children
    }
  },
  methods: {
    addTags(route) {

      this.$store.dispatch('tagsView/addView', route)

    },
  }
}
</script>

