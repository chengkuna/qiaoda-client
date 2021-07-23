<template>
  <div>Hello, {{name}}</div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const name = ref('王丽丽')
</script>