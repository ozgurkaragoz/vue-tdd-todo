<template>
  <ul id="listGroup">
    <li v-for="item in items">
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    items: Array
  }
}
</script>

<style scoped>
</style>
