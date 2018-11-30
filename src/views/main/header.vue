<template>
  <div class="header-info">
    <div class="header-info__user">
      <a-avatar
        style="background-color: #87d068;"
        icon="user" />
      <a-dropdown>
        <a
          class="ant-dropdown-link"
          href="#">
          张三疯<a-icon type="down" />
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    height: 100%;
    align-items: center;

    .breadcrumb {
      margin-left: 30px;
    }
  }
</style>
