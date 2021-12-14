<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" :isCollapse="isActive" />
    <div class="main-container">
      <header class="flex-center-between pr-4">
        <div style="padding: 0 15px;" @click="toggleClick">
          <svg :class="{'is-active':isActive}" class="hamburger" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
            <path
              d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
          </svg>
        </div>
        <el-dropdown>
          <span class="flex-center">
            <el-avatar class="mr-1" size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            王康平
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </header>
      <tags-view />
      <router-view class="page-container" />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import tagsView from './TagsView.vue'

export default {
  components: {
    Sidebar,
    tagsView
  },

  data() {
    return {
      isActive: false
    }
  },

  methods: {
    toggleClick() {
      this.isActive = !this.isActive
    }
  }
}
</script>