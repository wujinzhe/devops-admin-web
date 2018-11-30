<template>
  <a-menu
    theme="light"
    mode="inline"
    :default-selected-keys="['1']">
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
    </a-sub-menu>
    <a-menu-item key="2">
      <a-icon type="video-camera" />
      <span>nav 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <a-icon type="upload" />
      <span>nav 3</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {

}
</script>
