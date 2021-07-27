<template>
  <div>Login, {{name}}</div>
</template>

<script lang="ts">
import { ref } from 'vue'

import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const name = ref('王丹丹')

    return {
      name,
    }
  },
})
</script>
