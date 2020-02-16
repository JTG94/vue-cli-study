<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url에 따라 <NewsView></NewsView> 등 대체 됨. -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
 components: {
   ToolBar,
 },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
