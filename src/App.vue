<template>
  <el-container
    id="app">
    <el-aside
      class="aside"
      width="200px">
      <div class="logo">
        logo
      </div>
      <main-menu/>
    </el-aside>
    <el-container>
      <el-header>
        <main-header/>
      </el-header>
      <el-main class="main">
        <div class="router-view">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import mainMenu from '@/views/main/menu'
import mainHeader from '@/views/main/header'

export default {
  name: 'App',
  components: {
    mainMenu,
    mainHeader
  },
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    background-color: #eeeeee;
    display: flex;
  }

  .aside {
    .logo {
      height: 59px;
      line-height: 60px;
      white-space: 5px;
      background-color: #ff9800;
      color: white;
      font-size: 30px;
      font-style: italic;
      font-weight: 900;
      text-align: center;
    }
  }

  .router-view {
    background-color: #ffffff;
    width: 100%;
    padding: 20px;
  }
</style>
