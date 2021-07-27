<template>
  <n-layout has-sider class="h-screen overflow-hidden">
    <n-layout-sider bordered :native-scrollbar="false">
      <div class="p-4">
        颐和园路
      </div>
    </n-layout-sider>
    <n-layout-content :native-scrollbar="false">
      <div class="p-4 conent">
        2000200
      </div>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NLayout, NLayoutSider, NLayoutContent } from 'naive-ui'

const name = ref('王丽丽')
</script>

<style>
.conent {
  height: 9999px
}
</style>