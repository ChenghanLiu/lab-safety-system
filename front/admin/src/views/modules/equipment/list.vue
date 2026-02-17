<template>
  <div style="padding: 16px;">
    <el-card>
      <div slot="header">Equipment List</div>

      <el-table :data="rows" border stripe v-loading="loading">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="model" label="Model" />
        <el-table-column prop="status" label="Status" />
      </el-table>

      <div style="margin-top: 12px; text-align: right;">
        <el-pagination
            background
            layout="prev, pager, next, total"
            :current-page="page + 1"
            :page-size="size"
            :total="total"
            @current-change="onPageChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
// 注意：这里 import 你生成的 equipment.js 里对应的 GET 方法
// 你的脚本生成的函数名可能是 getEquipment / getApiEquipment 之类
import * as equipmentApi from '@/api/equipment'

export default {
  name: 'EquipmentList',
  data() {
    return {
      loading: false,
      rows: [],
      page: 0,
      size: 10,
      total: 0
    }
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      this.loading = true
      try {
        // 找到 equipmentApi 里“GET /api/equipment”那个函数
        // 先打印一下看看有哪些函数
        // console.log(Object.keys(equipmentApi))

        // 假设生成的是：getApiEquipment(params)
        const res = await (equipmentApi.getApiEquipment
            ? equipmentApi.getApiEquipment({ page: this.page, size: this.size })
            : equipmentApi.getEquipment
                ? equipmentApi.getEquipment({ page: this.page, size: this.size })
                : Promise.reject(new Error('Cannot find equipment list API function in src/api/equipment.js')))

        const data = res.data || res

        // 兼容 Spring Page: { content, totalElements }
        this.rows = data.content || data.records || data.list || []
        this.total = data.totalElements || data.total || 0
      } finally {
        this.loading = false
      }
    },
    onPageChange(p) {
      this.page = p - 1
      this.load()
    }
  }
}
</script>
