<template>
  <div style="height: 40px" class="flex-center-right pt-2">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
    size: Number,
    total: ''
  },

  methods: {
    handleSizeChange(size) {
      console.log(size)
    },

    handleCurrentChange(page) {
      console.log(page)
    }
  }
}
</script>