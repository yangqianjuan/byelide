<template>
   <div class="app-wrapper">
    <header>
      <AppNavigator msg="Hello" />
    </header>
    <main>
      <!-- routerView 用来渲染匹配上的路由对应的页面组件 -->
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import AppNavigator from '@/components/AppNavigator.vue'
</script>

<style  scoped>
.app-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

main {
  height: calc(100% - 48px);
}
</style>