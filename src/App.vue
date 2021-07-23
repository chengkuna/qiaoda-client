<template>
  <n-theme-editor>
    <router-view></router-view>
  </n-theme-editor>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NThemeEditor } from 'naive-ui'

export default defineComponent({
  components: {
    NThemeEditor,
  },
})
</script>