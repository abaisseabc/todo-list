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
        <input 
          type="date"
          class="add-task__input"
          v-model="dateInput"
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
      valueInput: '',
      dateInput: ''
    }
  },
  methods: {
    ...mapActions([
      'GET_POST_FROM_USER'
    ]),
    addPostToTodoList() {
      if (this.valueInput !== '' && this.dateInput !== '') {
        let date = new Date();
        date = date.toISOString().split('T')[0];

        if (this.dateInput >= date) {
          const objPost = {
            id: Date.now(),
            post: this.valueInput,
            date: this.dateInput
          }

          this.GET_POST_FROM_USER(objPost);
        }
      }
      this.valueInput = '',
      this.dateInput = ''
    }
  }
}
</script>

<style lang="scss">
</style>
