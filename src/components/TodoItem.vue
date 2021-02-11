<template>
  <div>
    {{ item.text }}
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object
  }
}
</script>

<style scoped>
</style>
