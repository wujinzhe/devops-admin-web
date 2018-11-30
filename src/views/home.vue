<template>
  <div>
    <a-date-picker @change="onChange" />
    <a-month-picker
      @change="onChange"
      placeholder="请选择月份" />
    <a-button
      type="primary"
      @click="click">Primary</a-button>

    <a-dropdown>
      <a
        class="ant-dropdown-link"
        href="#">
        Hover me <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>
<script>
// import { datePicker } from 'ant-design-vue'
export default {
  components: {
    // aDatePicker: datePicker
  },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    click () {
      this.$message.success('刷新成功')
    },
    onChange (date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>
