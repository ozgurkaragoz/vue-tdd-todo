<template>
  <ul id="listGroup">
    <li v-for="item in items" v-bind:key="item.text">
      <TodoItem :item="item"></TodoItem>
    </li>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  props: {
    items: Array
  },
  components: {
    TodoItem
  },
}
</script>

<style scoped>
</style>
