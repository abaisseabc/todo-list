<template>
  <div class="todo-list-main">
    <div class="add-task">
      <h1>План дел на ближайшее время (Todo List)</h1>
      <div class="add-task__main">
        <input
            placeholder="Введите задачу"
            type="text"
            v-model="valueInput"
            @keydown.enter="addPostToTodoList"
            class="add-task__input"
        >
        <button
            class="add-task__btn"
            @click="addPostToTodoList"
        >Добавить</button>
      </div>
    </div>

    <vTodoListVue />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import vTodoListVue from './components/v-todo-list.vue'

export default {
  name: 'App',
  components: {vTodoListVue},
  data() {
    return {
      valueInput: ''
    }
  },
  methods: {
    ...mapActions([
      'GET_POST_FROM_USER'
    ]),
    addPostToTodoList() {
      if (this.valueInput !== '') {

        const objPost = {
          id: Date.now(),
          post: this.valueInput
        }

        this.GET_POST_FROM_USER(objPost);
      }
      this.valueInput = ''
    }
  }
}
</script>

<style lang="scss">
.todo-list-main {
  text-align: center;
}
</style>
