<template>
  <a-locale-provider :locale="locale">
    <a-layout id="app">
      <a-layout-sider
        :trigger="null"
        collapsible
        v-model="collapsed"
      >
        <div class="logo">logo</div>
        <app-menu/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="header">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <a-breadcrumb class="breadcrumb">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
          <app-header/>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import appHeader from './views/main/header'
import appMenu from './views/main/menu'
export default {
  name: 'App',
  components: {
    appHeader,
    appMenu
  },
  data () {
    return {
      locale: zhCN,
      collapsed: false
    }
  }
}
</script>

<style lang="less" scoped>
#app .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#app .trigger:hover {
  color: @primary-color;
}

#app .logo {
  height: 64px;
  padding: 10px;
  background-color: @primary-color;
  font-size: 25px;
  color: #ffffff;
}

.breadcrumb {
  line-height: 64px;
}

.header {
  background: #ffffff;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  padding-right: 20px;

  &-info {
    display: flex;
    justify-content: flex-end;
    flex-grow: 2;
  }
}
</style>
