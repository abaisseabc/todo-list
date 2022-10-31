<template>
  <div class="todo-list-main">
    <div class="add-task">
      <h1>План дел на ближайшее время (Todo List)</h1>

      <vAddTaskVue />

    </div>

    <vTodoListVue />

  </div>
</template>

<script>
import vAddTaskVue from './components/v-add-task.vue'
import vTodoListVue from './components/v-todo-list.vue'

export default {
  name: 'App',
  components: {vTodoListVue, vAddTaskVue},
}
</script>

<style lang="scss">
</style>
