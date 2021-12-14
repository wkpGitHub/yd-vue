<template>
  <div>
    <div class="search-card">
      <div class="form-item-content">
        <el-row>
          <el-col :span="6" class="form-item">
            <label>姓名：</label>
            <el-input v-model="searchParams.name" />
          </el-col>
          <el-col :span="6" class="form-item">
            <label>姓名：</label>
            <el-input v-model="searchParams.name" />
          </el-col>
          <el-col :span="6" class="form-item">
            <label>姓名：</label>
            <el-input v-model="searchParams.name" />
          </el-col>
          <el-col :span="6" class="form-item">
            <label>姓名：</label>
            <el-input v-model="searchParams.name" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="form-item">
            <label>姓名：</label>
            <el-input v-model="searchParams.name" />
          </el-col>
          <el-col :span="6" class="form-item">
            <label>姓名：</label>
            <el-input v-model="searchParams.name" />
          </el-col>
          <el-col :span="6" class="form-item">
            <label>姓名：</label>
            <el-input v-model="searchParams.name" />
          </el-col>
          <el-col :span="6" class="form-item">
            <label>姓名：</label>
            <el-input v-model="searchParams.name" />
          </el-col>
        </el-row>
      </div>
      <div class="search-item">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
    <div class="page-content">
      <div class="flex-center-between pl-1">
        <h3>{{ $route.meta.title }}</h3>
        <div>
          <el-button>新增</el-button>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
      <Pagination :page="pagination.page" :size="pagination.size" :total="pagination.total" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchParams: {
        name: ''
      },
      pagination: {
        page: 1,
        size: 10,
        total: 100
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>